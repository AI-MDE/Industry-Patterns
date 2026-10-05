import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { MdeCatalog, MdeConcept, ReferenceAttribute } from './types.ts';
import { object, name, list } from './validation.ts';
export async function loadCatalog(file: string): Promise<MdeCatalog> {
    const data = JSON.parse(await readFile(file, 'utf8'));
    if (Array.isArray(data)) {
        const concepts = data.map((item, i) => { const c = object(item, `concepts[${i}]`); for (const k of ['domain', 'abe', 'entity'])
            name(c[k], `concept.${k}`); return c as MdeConcept; });
        return { concepts, domains: [...new Set(concepts.map(c => c.domain))], abes: [...new Map(concepts.map(c => [`${c.domain}\0${c.abe}`, { name: c.abe, domain: c.domain }])).values()], capabilities: [], interfaces: [], warnings: ['Legacy concept list: relationship, capability, and interface comparison is limited to supplied detail.'] };
    }
    const manifest = object(data, 'canonical manifest');
    const root = path.resolve(path.dirname(file), '..');
    const abes = new Map(list(manifest.abes, 'manifest.abes').map(a => [a.path, a]));
    const paths = new Set(list(manifest.concepts, 'manifest.concepts').map(c => c.path));
    let aliases: Array<{
        term: string;
        source: string;
        canonical: string;
    }> = [];
    try {
        aliases = JSON.parse(await readFile(path.join(path.dirname(file), 'terminology-aliases.json'), 'utf8')).aliases;
    }
    catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT')
            throw error;
    }
    function local(p: string) { if (path.isAbsolute(p))
        throw new Error(`Canonical paths must be relative: ${p}`); const resolved = path.resolve(root, p); if (!resolved.startsWith(root + path.sep))
        throw new Error(`Canonical path escapes repository: ${p}`); return resolved; }
    const concepts: MdeConcept[] = [];
    for (const raw of manifest.concepts) {
        const c = object(raw, 'manifest concept');
        name(c.name, 'concept.name');
        const a = abes.get(c.abe);
        if (!a)
            throw new Error(`Unknown ABE for ${c.path}`);
        if (c.specializes && !paths.has(c.specializes))
            throw new Error(`Unknown specialization ancestor: ${c.specializes}`);
        const text = await readFile(local(c.path), 'utf8');
        const attributes: ReferenceAttribute[] = [];
        // Markdown provides logical attribute names, not inferred types or implementation constraints.
        for (const match of text.matchAll(/^Logical attributes(?: may include)?: (.+)$/gm))
            for (const attr of match[1].replace(/\.$/, '').split(';').map(s => s.trim()))
                if (attr && !attributes.some(a => a.name === attr))
                    attributes.push({ name: attr });
        concepts.push({ domain: c.domain, abe: a.name, entity: c.name, path: c.path, specializes: c.specializes, attributes, scopedAliases: aliases.filter(x => x.canonical === c.path).map(x => ({ term: x.term, source: x.source })), relationships: [] });
    }
    const bypath = new Map(concepts.map(c => [c.path, c]));
    for (const r of manifest.relationships ?? [])
        if (r.status === 'resolved') {
            const c = bypath.get(r.sourceConcept);
            if (!c || !bypath.has(r.targetConcept))
                throw new Error('Canonical relationship has unknown endpoint');
            c.relationships!.push({ name: r.role, target: r.targetConcept, cardinality: r.cardinality });
        }
    return { concepts, domains: list(manifest.domains, 'manifest.domains').map(d => d.name), abes: [...abes.values()].map(a => ({ name: a.name, domain: a.domain, path: a.path })), capabilities: manifest.capabilities ?? [], interfaces: manifest.interfaces ?? [], warnings: [...(manifest.capabilities?.length ? [] : ['The canonical manifest has no capability inventory; supplied capabilities remain review candidates.']), ...(manifest.interfaces?.length ? [] : ['The canonical manifest has no interface inventory; supplied interfaces remain review candidates.'])] };
}
