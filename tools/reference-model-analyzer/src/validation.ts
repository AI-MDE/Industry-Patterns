import type { ReferenceModel } from './types.ts';
export function object(value: unknown, where: string): Record<string, any> {
    if (!value || typeof value !== 'object' || Array.isArray(value))
        throw new Error(`${where} must be an object`);
    return value as Record<string, any>;
}
export function name(value: unknown, where: string): string {
    if (typeof value !== 'string' || !value.trim())
        throw new Error(`${where} must be a nonempty string`);
    return value;
}
export function list(value: unknown, where: string): any[] {
    if (!Array.isArray(value))
        throw new Error(`${where} must be an array`);
    return value;
}
export function validateReference(value: unknown): ReferenceModel {
    const m = object(value, 'model');
    name(object(m.source, 'source').system, 'source.system');
    if (m.source.version !== undefined)
        name(m.source.version, 'source.version');
    const ids = new Set<string>();
    const named = (item: unknown, where: string) => { const row = object(item, where); name(row.name, `${where}.name`); if (row.id !== undefined) {
        name(row.id, `${where}.id`);
        if (ids.has(row.id))
            throw new Error(`Duplicate source identifier: ${row.id}`);
        ids.add(row.id);
    } return row; };
    for (const [di, domain] of list(m.domains, 'domains').entries()) {
        const d = named(domain, `domains[${di}]`);
        for (const [ai, abe] of list(d.abes, `${d.name}.abes`).entries()) {
            const a = named(abe, `${d.name}.abes[${ai}]`);
            for (const [ei, entity] of list(a.entities, `${a.name}.entities`).entries()) {
                const e = named(entity, `${a.name}.entities[${ei}]`);
                for (const attr of e.attributes === undefined ? [] : list(e.attributes, `${e.name}.attributes`)) {
                    const x = object(attr, 'attribute');
                    name(x.name, 'attribute.name');
                    if (x.required !== undefined && typeof x.required !== 'boolean')
                        throw new Error('attribute.required must be boolean');
                    if (x.type !== undefined)
                        name(x.type, 'attribute.type');
                }
                for (const rel of e.relationships === undefined ? [] : list(e.relationships, `${e.name}.relationships`)) {
                    const x = object(rel, 'relationship');
                    name(x.name, 'relationship.name');
                    name(x.target, 'relationship.target');
                    if (x.cardinality !== undefined)
                        name(x.cardinality, 'relationship.cardinality');
                }
                if (e.specializes !== undefined)
                    name(e.specializes, `${e.name}.specializes`);
                if (e.sourceSpecific !== undefined && typeof e.sourceSpecific !== 'boolean')
                    throw new Error('sourceSpecific must be boolean');
            }
        }
    }
    for (const key of ['capabilities', 'interfaces', 'modules', 'workflows'])
        if (m[key] !== undefined)
            for (const item of list(m[key], key)) {
                const r = named(item, key);
                for (const field of ['relatedAbes', 'operations'])
                    if (r[field] !== undefined)
                        for (const x of list(r[field], field))
                            name(x, field);
            }
    if (m.warnings !== undefined)
        for (const w of list(m.warnings, 'warnings'))
            name(w, 'warning');
    if (m.unmapped !== undefined)
        for (const x of list(m.unmapped, 'unmapped')) {
            name(object(x, 'unmapped concept').name, 'unmapped.name');
            name(x.sourceType, 'unmapped.sourceType');
            object(x.provenance, 'unmapped.provenance');
        }
    return m as ReferenceModel;
}
