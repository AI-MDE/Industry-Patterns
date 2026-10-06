import { createHash } from 'node:crypto';
import { xml2js } from 'xml-js';
import { parseDocument } from 'yaml';
import type { ImportOptions, Provenance, ReferenceModel, ReferenceEntity } from './types.ts';
import { object, name, list, validateReference } from './validation.ts';
export const adapters = ['normalized', 'records-json', 'csv', 'sid-xmi', 'bian-json', 'bian-csv', 'bian-openapi'] as const;
export type Adapter = typeof adapters[number];
export function alignType(term: string, system: string, aliases: ImportOptions['aliases']): string | undefined {
    if (['Domain', 'ABE', 'Entity', 'Capability', 'Module', 'Interface', 'Workflow'].includes(term))
        return term;
    return Object.entries(aliases ?? {}).find(([, entries]) => entries.some(x => x.alias.toLowerCase() === term.toLowerCase() && x.source.toLowerCase() === system.toLowerCase()))?.[0];
}
function provenance(row: Record<string, any>, locator: string, options: ImportOptions, type?: string): Provenance {
    const originalType = type ?? row.sourceType ?? row.type;
    return { file: options.file, locator, originalName: name(row.name, `${locator}.name`), originalId: row.id, originalType, alignedType: alignType(originalType ?? 'Entity', options.system ?? '', options.aliases), original: structuredClone(row) };
}
function source(options: ImportOptions, adapter: string) { return { system: options.system ?? 'Local reference', version: options.version, file: options.file, adapter }; }
function recordsModel(value: unknown, options: ImportOptions, adapter: string): ReferenceModel {
    const container = Array.isArray(value) ? { records: value } : object(value, 'export');
    const originalSource = container.source === undefined ? {} : object(container.source, 'export.source');
    const opts = { ...options, system: options.system ?? originalSource.system, version: options.version ?? originalSource.version };
    const m: ReferenceModel = { source: { ...originalSource, ...source(opts, adapter) }, domains: [], capabilities: [], interfaces: [], modules: [], workflows: [], unmapped: [], warnings: [] };
    const getDomain = (n: string) => { let d = m.domains.find(d => d.name === n); if (!d) {
        d = { name: n, abes: [] };
        m.domains.push(d);
    } return d; };
    const getAbe = (dn: string, n: string) => { const d = getDomain(dn); let a = d.abes.find(a => a.name === n); if (!a) {
        a = { name: n, entities: [] };
        d.abes.push(a);
    } return a; };
    const ids = new Set<string>();
    const structures = new Set<string>();
    for (const [i, item] of list(container.records, 'records').entries()) {
        const r = object(item, `records[${i}]`);
        const p = provenance(r, `records[${i}]`, opts, r.sourceType ?? r.type ?? 'unknown');
        const kind = p.alignedType;
        if (r.id !== undefined) {
            name(r.id, 'record.id');
            if (ids.has(r.id))
                throw new Error(`Duplicate source identifier: ${r.id}`);
            ids.add(r.id);
        }
        const dn = r.domain === undefined ? 'Imported' : name(r.domain, 'record.domain');
        const an = r.abe === undefined ? 'Imported' : name(r.abe, 'record.abe');
        const row = { ...r, name: r.name as string, provenance: p };
        if (kind === 'Domain' || kind === 'ABE') {
            const key = `${kind}:${kind === 'ABE' ? dn : ''}:${r.name}`;
            if (structures.has(key))
                throw new Error(`Duplicate structural record: ${key}; use distinct domain/ABE names or a hierarchical normalized export`);
            structures.add(key);
        }
        if (kind === 'Domain')
            Object.assign(getDomain(r.name), row, { abes: getDomain(r.name).abes });
        else if (kind === 'ABE')
            Object.assign(getAbe(dn, r.name), row, { entities: getAbe(dn, r.name).entities });
        else if (kind === 'Entity')
            getAbe(dn, an).entities.push(row as ReferenceEntity);
        else if (kind === 'Capability')
            m.capabilities!.push(row as any);
        else if (kind === 'Interface')
            m.interfaces!.push(row as any);
        else if (kind === 'Module')
            m.modules!.push(row);
        else if (kind === 'Workflow')
            m.workflows!.push(row);
        else
            m.unmapped!.push({ name: r.name, sourceType: p.originalType ?? 'unknown', provenance: p });
    }
    m.extensions = Object.fromEntries(Object.entries(container).filter(([k]) => !['records', 'source'].includes(k)));
    if (m.domains.some(d => d.name === 'Imported' || d.abes.some(a => a.name === 'Imported')))
        m.warnings!.push('Records omit domain/ABE placement. Imported is an analysis container, not a proposed MDE Domain or ABE.');
    return validateReference(m);
}
export function parseCsv(text: string): Array<Record<string, unknown>> {
    const rows: string[][] = [];
    let row: string[] = [], cell = '', quoted = false, closed = false;
    text = text.replace(/^\uFEFF/, '');
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (quoted) {
            if (c === '"') {
                if (text[i + 1] === '"') {
                    cell += '"';
                    i++;
                }
                else {
                    quoted = false;
                    closed = true;
                }
            }
            else
                cell += c;
            continue;
        }
        if (c === '"') {
            if (cell || closed)
                throw new Error('Invalid CSV quote');
            quoted = true;
        }
        else if (c === ',') {
            row.push(cell);
            cell = '';
            closed = false;
        }
        else if (c === '\n' || c === '\r') {
            if (c === '\r' && text[i + 1] === '\n')
                i++;
            row.push(cell);
            if (row.some(x => x !== ''))
                rows.push(row);
            row = [];
            cell = '';
            closed = false;
        }
        else {
            if (closed)
                throw new Error('Unexpected character after quoted CSV value');
            cell += c;
        }
    }
    if (quoted)
        throw new Error('Unterminated CSV quote');
    if (cell || row.length) {
        row.push(cell);
        rows.push(row);
    }
    if (!rows.length)
        throw new Error('CSV is empty');
    const headers = rows.shift()!;
    if (new Set(headers).size !== headers.length || headers.some(h => !h.trim()))
        throw new Error('CSV headers must be unique and nonempty');
    return rows.map((values, i) => {
        if (values.length !== headers.length)
            throw new Error(`CSV row ${i + 2} has ${values.length} fields; expected ${headers.length}`);
        const result: Record<string, unknown> = Object.fromEntries(headers.map((h, j) => [h, values[j]]));
        for (const key of ['attributes', 'relationships', 'operations', 'relatedAbes'])
            if (typeof result[key] === 'string' && result[key])
                result[key] = JSON.parse(result[key] as string);
        for (const key of ['attributes', 'relationships', 'operations', 'relatedAbes', 'domain', 'abe', 'id', 'sourceType', 'type', 'specializes'])
            if (result[key] === '')
                delete result[key];
        if (result.sourceSpecific !== undefined) {
            if (!['', 'true', 'false'].includes(String(result.sourceSpecific)))
                throw new Error('CSV sourceSpecific must be true or false');
            if (result.sourceSpecific === '')
                delete result.sourceSpecific;
            else
                result.sourceSpecific = result.sourceSpecific === 'true';
        }
        return result;
    });
}
function importOpenApi(value: unknown, options: ImportOptions): ReferenceModel {
    const api = object(value, 'OpenAPI');
    if (typeof api.openapi !== 'string' || !api.openapi.startsWith('3.'))
        throw new Error('BIAN OpenAPI adapter requires an OpenAPI 3.x JSON or YAML document');
    const info = object(api.info, 'OpenAPI.info');
    const title = name(info.title, 'info.title');
    const records: Array<Record<string, unknown>> = [{ name: title, type: 'Service Domain', description: info.description }];
    for (const [n, schema] of Object.entries(api.components?.schemas ?? {})) {
        const s = object(schema, `schema ${n}`);
        const attrs = [];
        const rels = [];
        for (const [key, prop] of Object.entries(s.properties ?? {})) {
            const p = object(prop, `property ${key}`);
            const ref = p.$ref ?? p.items?.$ref;
            if (ref) {
                if (!String(ref).startsWith('#/components/schemas/'))
                    throw new Error(`Only local schema references are supported: ${ref}`);
                const target = decodeURIComponent(String(ref).slice('#/components/schemas/'.length)).replace(/~1/g, '/').replace(/~0/g, '~');
                if (!Object.hasOwn(api.components.schemas, target))
                    throw new Error(`Unresolved OpenAPI reference: ${ref}`);
                rels.push({ name: key, target, cardinality: p.type === 'array' ? '0..*' : (s.required ?? []).includes(key) ? '1' : '0..1', original: p });
            }
            else
                attrs.push({ name: key, type: p.type, required: (s.required ?? []).includes(key), original: p });
        }
        records.push({ id: `schema:${n}`, name: n, type: 'Business Object', domain: title, abe: title, description: s.description, attributes: attrs, relationships: rels, originalSchema: s });
    }
    for (const [route, item] of Object.entries(api.paths ?? {})) {
        const methods = object(item, `path ${route}`);
        for (const method of ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'])
            if (methods[method]) {
                const op = object(methods[method], `${method} ${route}`);
                records.push({ id: `operation:${method}:${route}`, name: op.operationId ?? `${method.toUpperCase()} ${route}`, type: 'Service Operation', operations: [`${method.toUpperCase()} ${route}`], description: op.description ?? op.summary, originalOperation: op });
            }
    }
    const model = recordsModel({ records, originalOpenApi: api }, { ...options, system: options.system ?? 'BIAN', version: options.version ?? info.version }, 'bian-openapi');
    model.warnings!.push('Schema composition, callbacks, and vendor extensions are preserved as source material. Direct schema properties and path operations are extracted; API structures are evidence, not automatically business entities or interfaces.');
    return model;
}
function importXmi(text: string, options: ImportOptions): ReferenceModel {
    if (/<!DOCTYPE|<!ENTITY/i.test(text))
        throw new Error('XMI must not contain a DTD or entity declarations');
    const xml = xml2js(text, { compact: false }) as any;
    const records: Array<Record<string, any>> = [];
    const classes: Array<{
        node: any;
        domain: string;
        abe: string;
    }> = [];
    const associations: any[] = [];
    const ids = new Map<string, string>();
    const children = (n: any) => (n.elements ?? []).filter((x: any) => x.type === 'element');
    const local = (n: string) => n.split(':').at(-1)!;
    function walk(n: any, packages: string[]) {
        const a = n.attributes ?? {};
        const kind = local(a['xmi:type'] ?? n.name ?? '');
        const nname = a.name;
        let next = packages;
        if (kind === 'Package' && nname)
            next = [...packages, nname];
        if (kind === 'Class' && nname) {
            if (a['xmi:id']) {
                if (ids.has(a['xmi:id']))
                    throw new Error(`Duplicate XMI identifier: ${a['xmi:id']}`);
                ids.set(a['xmi:id'], nname);
            }
            classes.push({ node: n, domain: packages[0] ?? 'Imported', abe: packages.at(-1) ?? 'Imported' });
        }
        else if (kind === 'Association') {
            associations.push(n);
        }
        else if (a['xmi:type'] && !['Package', 'Model'].includes(kind) && nname)
            records.push({ name: nname, id: a['xmi:id'], type: a['xmi:type'], originalElement: n });
        for (const c of children(n))
            walk(c, next);
    }
    for (const n of children(xml))
        walk(n, []);
    for (const { node, domain, abe } of classes) {
        const a = node.attributes;
        const attributes = [];
        const relationships = [];
        const generalizations: string[] = [];
        for (const c of children(node)) {
            const ca = c.attributes ?? {};
            const tag = local(c.name);
            if (tag === 'ownedAttribute' && ca.name) {
                const type = ca.type ?? children(c).find((x: any) => local(x.name) === 'type')?.attributes?.['xmi:idref'];
                const lower = children(c).find((x: any) => local(x.name) === 'lowerValue')?.attributes?.value ?? '1';
                const upper = children(c).find((x: any) => local(x.name) === 'upperValue')?.attributes?.value ?? '1';
                if (type && ids.has(type))
                    relationships.push({ name: ca.name, target: type, cardinality: lower === upper ? lower : `${lower}..${upper}`, original: c });
                else
                    attributes.push({ name: ca.name, type: type ?? children(c).find((x: any) => local(x.name) === 'type')?.attributes?.href, required: lower !== '0', original: c });
            }
            else if (tag === 'generalization') {
                const target = ca.general ?? children(c).find((x: any) => local(x.name) === 'general')?.attributes?.['xmi:idref'];
                if (target)
                    generalizations.push(target);
            }
        }
        records.push({ id: a['xmi:id'], name: a.name, type: 'Business Entity', domain, abe, attributes, relationships, specializes: generalizations.length === 1 ? generalizations[0] : undefined, generalizations, originalElement: node, originalUmlType: a['xmi:type'] });
    }
    for (const association of associations) {
        const ends = children(association).filter((n: any) => local(n.name) === 'ownedEnd');
        if (ends.length === 2 && ends.every((n: any) => ids.has(n.attributes?.type))) {
            for (let i = 0; i < 2; i++) {
                const from = records.find(r => r.id === ends[i].attributes.type);
                const end = ends[1 - i];
                const a = end.attributes;
                if (!from)
                    throw new Error('Association source class was not imported');
                const lower = children(end).find((n: any) => local(n.name) === 'lowerValue')?.attributes?.value ?? '1';
                const upper = children(end).find((n: any) => local(n.name) === 'upperValue')?.attributes?.value ?? '1';
                from.relationships.push({ name: a.name ?? association.attributes?.name ?? `association:${association.attributes?.['xmi:id'] ?? 'unnamed'}`, target: a.type, cardinality: lower === upper ? lower : `${lower}..${upper}`, kind: a.aggregation === 'composite' ? 'composition' : 'association', original: association });
            }
        }
        else
            records.push({ name: association.attributes?.name ?? `Association ${association.attributes?.['xmi:id'] ?? '(unnamed)'}`, id: association.attributes?.['xmi:id'], type: 'uml:Association', originalElement: association });
    }
    const model = recordsModel({ records, originalXml: xml }, { ...options, system: options.system ?? 'SID' }, 'sid-xmi');
    model.warnings!.push('UML Package hierarchy provides provisional Domain/ABE containers. Named Classes, ownedAttribute references, binary ownedEnd associations, multiplicities, and one generalization are extracted. Multiple inheritance, memberEnd-only associations, stereotypes, and the original XML tree are preserved for review.');
    for (const r of records)
        if (r.generalizations?.length > 1)
            model.warnings!.push(`Multiple inheritance for ${r.name} retained in generalizations; no single parent was chosen.`);
    return model;
}
export function importModel(text: string, adapter: Adapter, options: ImportOptions): ReferenceModel {
    if (!adapters.includes(adapter))
        throw new Error(`Unknown adapter: ${adapter}`);
    let model: ReferenceModel;
    if (adapter === 'normalized') {
        const input = validateReference(JSON.parse(text));
        model = structuredClone(input);
        model.source = { ...input.source, ...source({ ...options, system: options.system ?? input.source.system, version: options.version ?? input.source.version }, adapter) };
        for (const [di, d] of model.domains.entries()) {
            d.provenance = provenance(d, `domains[${di}]`, { ...options, system: model.source.system }, 'Domain');
            for (const [ai, a] of d.abes.entries()) {
                a.provenance = provenance(a, `domains[${di}].abes[${ai}]`, { ...options, system: model.source.system }, 'ABE');
                for (const [ei, e] of a.entities.entries()) {
                    e.provenance = provenance(e, `domains[${di}].abes[${ai}].entities[${ei}]`, { ...options, system: model.source.system }, (e.sourceType as string) ?? 'Entity');
                    if (e.provenance.alignedType !== 'Entity') {
                        model.unmapped ??= [];
                        model.unmapped.push({ name: e.name, sourceType: e.provenance.originalType!, provenance: e.provenance });
                    }
                }
            }
        }
        for (const kind of ['capabilities', 'interfaces', 'modules', 'workflows'] as const)
            for (const [i, r] of (model[kind] ?? []).entries())
                r.provenance = provenance(r, `${kind}[${i}]`, { ...options, system: model.source.system }, { capabilities: 'Capability', interfaces: 'Interface', modules: 'Module', workflows: 'Workflow' }[kind]);
    }
    else if (adapter === 'sid-xmi')
        model = importXmi(text, options);
    else if (adapter === 'bian-openapi') {
        // YAML also accepts JSON: both formats use the same extraction and validation.
        const document = parseDocument(text, { uniqueKeys: true, stringKeys: true, merge: false });
        const problem = document.errors[0] ?? document.warnings[0];
        if (problem)
            throw new Error(`Invalid OpenAPI JSON/YAML: ${problem.message}`);
        const value = document.toJS({ maxAliasCount: 100 });
        // Normalize aliases to JSON values and reject cyclic YAML structures.
        model = importOpenApi(JSON.parse(JSON.stringify(value)), options);
    }
    else
        model = recordsModel(adapter.endsWith('csv') || adapter === 'csv' ? parseCsv(text) : JSON.parse(text), { ...options, system: options.system ?? (adapter.startsWith('bian') ? 'BIAN' : undefined) }, adapter);
    model.source.sha256 = createHash('sha256').update(text).digest('hex');
    return validateReference(model);
}
