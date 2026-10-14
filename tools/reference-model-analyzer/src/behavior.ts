/** Vendor-neutral behavior knowledge intake. This is a documented exchange contract,
 * not an exporter for proprietary tenant configurations. Never infer hidden steps. */
import { createHash } from 'node:crypto';
import type { ReferenceModel, ImportOptions, Provenance } from './types.ts';
import { validateReference, object, name, list } from './validation.ts';

const allowed = new Set(['capability','use-case','workflow','business-rule','event','role','process']);
export function importBehavior(text: string, options: ImportOptions): ReferenceModel {
    const input = object(JSON.parse(text), 'behavior export');
    const src = input.source ? object(input.source, 'source') : {};
    const system = options.system ?? name(src.system, 'source.system');
    const records = list(input.records, 'records');
    const seen = new Set<string>();
    const m: ReferenceModel = {
        source: { ...src, system, version: options.version ?? src.version,
            file: options.file, adapter: 'behavior-json', sha256: createHash('sha256').update(text).digest('hex') },
        domains: [], capabilities: [], interfaces: [], modules: [], workflows: [],
        unmapped: [], warnings: ['Behavior definitions are source evidence, not adopted MDE rules. Review tenant variations, access rights, and provenance before any promotion.']
    };
    for (const [i, item] of records.entries()) {
        const record = object(item, `records[${i}]`);
        const type = name(record.type, `records[${i}].type`).toLowerCase();
        const title = name(record.name, `records[${i}].name`);
        const id = name(record.id ?? `${type}:${title}`, `records[${i}].id`);
        if (seen.has(id)) throw new Error(`Duplicate behavior identifier: ${id}`);
        seen.add(id);
        const provenance: Provenance = { file: options.file, locator: `records[${i}]`,
            originalName: title, originalId: id, originalType: type, original: structuredClone(record) };
        const row = { ...record, id, name: title, provenance };
        if (!allowed.has(type)) {
            m.unmapped!.push({ name: title, sourceType: type, provenance });
            continue;
        }
        // Preserve full behavior graph, including rules, events, actors, triggers and branch conditions.
        // Use-case/process records remain workflows with explicit sourceType for later distinction.
        if (type === 'capability') m.capabilities!.push(row);
        else if (type === 'workflow' || type === 'process' || type === 'use-case')
            m.workflows!.push({ ...row, sourceType: type });
        else m.extensions ??= {};
        if (['business-rule','event','role'].includes(type)) {
            const key = type === 'business-rule' ? 'businessRules' : type === 'event' ? 'events' : 'roles';
            const ext = m.extensions as Record<string, any>;
            (ext[key] ??= []).push(row);
        }
    }
    m.extensions ??= {};
    (m.extensions as Record<string, unknown>).sourceExtensions = Object.fromEntries(
        Object.entries(input).filter(([k]) => !['source', 'records'].includes(k)));
    return validateReference(m);
}
