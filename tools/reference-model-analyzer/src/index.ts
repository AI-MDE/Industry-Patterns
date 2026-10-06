import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { adapters, importModel } from './importer.ts';
import type { Adapter } from './importer.ts';
import { loadCatalog } from './catalog.ts';
import { analyze } from './analyzer.ts';
import type { AnalysisReport } from './types.ts';
import { validateReference } from './validation.ts';
const tool = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const help = `Reference Model Importer (Node >=22.18)
  node src/index.ts import <input> --adapter <adapter> --out <normalized.json> [--system SID|BIAN]
  node src/index.ts analyze <input> [<model/model.json>|<legacy-concepts.json>] [--adapter <adapter>] [--out <report.json>]
  node src/index.ts run <input> --adapter <adapter> --out <new-output-directory> [--model <manifest>]
Adapters: ${adapters.join(', ')}
Options: --system <source>, --version <version>, --aliases <meta-type-aliases.json>, --force
Without --out, import/analyze prints JSON. run writes normalized.json, report.json, and report.md.
analyze defaults to normalized JSON. For BIAN YAML, pass --adapter bian-openapi.
All proposed mappings require review; the canonical model is never modified.`;
function markdown(report: AnalysisReport): string {
    const escape = (s: unknown) => String(s ?? '').replace(/\|/g, '\\|').replace(/[\r\n]/g, ' ');
    let text = `# Reference model mapping report\n\nSource: ${escape(report.source.system)}. Adapter: ${escape(report.source.adapter)}.\n\nEvery mapping is a proposal for manual review. The canonical model was not modified. Scores measure terminology alignment, not semantic certainty.\n\n## Entity mappings\n\n| Domain | ABE | Source concept | Canonical candidate | Classification | Reason |\n|---|---|---|---|---|---|\n`;
    for (const m of report.matches)
        text += `| ${escape(m.source.domain)} | ${escape(m.source.abe)} | ${escape(m.source.entity)} | ${escape(m.candidate?.path ?? m.candidate?.entity ?? m.alternatives?.map(c => `${c.domain}/${c.entity}`).join('; '))} | ${m.classification} | ${escape(m.rationale)} |\n`;
    for (const [label, rows] of [['Domains', report.domainMatches], ['ABEs', report.abeMatches], ['Capabilities', report.capabilityMatches], ['Interfaces', report.interfaceMatches]] as const) {
        text += `\n## ${label}\n\n| Source | Candidates | Classification |\n|---|---|---|\n`;
        for (const row of rows)
            text += `| ${escape(row.source)} | ${escape(row.candidates.join('; '))} | ${row.classification} |\n`;
    }
    text += '\n## Relationship findings\n\n| Source | Relationship | Target | Cardinality | Finding |\n|---|---|---|---|---|\n';
    for (const m of report.matches)
        for (const r of m.relationshipFindings ?? [])
            text += `| ${escape(m.source.entity)} | ${escape(r.relationship.name)} | ${escape(r.relationship.target)} | ${escape(r.relationship.cardinality)} | ${escape(r.status)} |\n`;
    text += '\n## Unmapped source concepts\n\n';
    for (const x of report.unmapped ?? [])
        text += `- ${escape(x.name)} (${escape(x.sourceType)}), ${escape(x.provenance.locator)}\n`;
    text += '\n## Warnings and scope\n\n';
    for (const w of report.warnings)
        text += `- ${escape(w)}\n`;
    return text;
}
async function save(file: string, text: string, force: boolean) { const resolved = path.resolve(file); const modelRoot = path.resolve(tool, '../../model'); if (resolved === modelRoot || resolved.startsWith(modelRoot + path.sep))
    throw new Error('Import reports cannot overwrite the canonical model; choose an output directory outside model/'); await mkdir(path.dirname(resolved), { recursive: true }); await writeFile(resolved, text, { flag: force ? 'w' : 'wx' }); }
async function main() {
    const args = process.argv.slice(2);
    if (!args.length || args.includes('--help')) {
        console.log(help);
        return;
    }
    const command = ['import', 'analyze', 'run'].includes(args[0]) ? args.shift()! : 'analyze';
    const positional: string[] = [];
    const flags: Record<string, string | boolean> = {};
    while (args.length) {
        const a = args.shift()!;
        if (a === '--force')
            flags.force = true;
        else if (a.startsWith('--')) {
            if (!['--adapter', '--out', '--model', '--system', '--version', '--aliases'].includes(a))
                throw new Error(`Unknown option: ${a}`);
            const value = args.shift();
            if (!value || value.startsWith('--'))
                throw new Error(`Missing value for ${a}`);
            flags[a.slice(2)] = value;
        }
        else
            positional.push(a);
    }
    if (!positional[0] || positional.length > (command === 'analyze' ? 2 : 1))
        throw new Error(help);
    if (command === 'run' && !flags.out)
        throw new Error('run requires --out <new-output-directory>');
    const adapter = (flags.adapter ?? 'normalized') as Adapter;
    if (!adapters.includes(adapter))
        throw new Error(`Unknown adapter: ${adapter}`);
    const aliasFile = String(flags.aliases ?? path.join(tool, 'terminology-aliases.json'));
    const aliases = JSON.parse(await readFile(aliasFile, 'utf8'));
    const input = positional[0];
    const text = await readFile(input, 'utf8');
    if (adapter === 'normalized' && /\.ya?ml$/i.test(input))
        throw new Error('The normalized adapter expects JSON. For BIAN OpenAPI YAML, pass --adapter bian-openapi.');
    const parsed = command === 'analyze' && adapter === 'normalized' ? validateReference(JSON.parse(text)) : undefined;
    const normalized = parsed?.source.file ? parsed : importModel(text, adapter, { file: path.resolve(input), system: flags.system as string | undefined, version: flags.version as string | undefined, aliases });
    const json = (value: unknown) => JSON.stringify(value, null, 2) + '\n';
    if (command === 'import') {
        if (flags.out)
            await save(String(flags.out), json(normalized), !!flags.force);
        else
            process.stdout.write(json(normalized));
        return;
    }
    const modelFile = String(flags.model ?? positional[1] ?? path.resolve(tool, '../../model/model.json'));
    const catalog = await loadCatalog(modelFile);
    const report = analyze(normalized, catalog);
    if (command === 'analyze') {
        if (flags.out)
            await save(String(flags.out), json(report), !!flags.force);
        else
            process.stdout.write(json(report));
        return;
    }
    const directory = String(flags.out);
    const outputs = ['normalized.json', 'report.json', 'report.md'].map(f => path.join(directory, f));
    if (!flags.force)
        for (const output of outputs) {
            try {
                await access(output);
            }
            catch (e) {
                if ((e as NodeJS.ErrnoException).code === 'ENOENT')
                    continue;
                throw e;
            }
            throw new Error(`Output exists: ${output}; choose a new directory or use --force`);
        }
    for (const [i, value] of [json(normalized), json(report), markdown(report)].entries())
        await save(outputs[i], value, !!flags.force);
    console.log(`Imported ${normalized.domains.reduce((n, d) => n + d.abes.reduce((a, b) => a + b.entities.length, 0), 0)} entities; ${normalized.unmapped?.length ?? 0} unmapped concepts. Wrote ${outputs.join(', ')}. All mappings require review.`);
}
main().catch(error => { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; });
