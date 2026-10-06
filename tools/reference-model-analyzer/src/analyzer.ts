import type { AnalysisMatch, AnalysisReport, MatchClassification, MdeCatalog, MdeConcept, ReferenceEntity, ReferenceModel, StructuralMatch } from './types.ts';
import { validateReference } from './validation.ts';
export function normalize(value: string): string { return value.replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
function similarity(a: string, b: string): number { const x = new Set(normalize(a).split(/\s+/).filter(Boolean)); const y = new Set(normalize(b).split(/\s+/).filter(Boolean)); if (!x.size || !y.size)
    return 0; return [...x].filter(t => y.has(t)).length / new Set([...x, ...y]).size; }
function compatibleAlias(c: MdeConcept, entity: ReferenceEntity, system: string): string[] { return [...(c.aliases ?? []), ...(c.scopedAliases ?? []).filter(a => a.source === entity.provenance?.file || a.source.toLowerCase() === system.toLowerCase()).map(a => a.term)]; }
function candidates(entity: ReferenceEntity, domain: string, abe: string, catalog: MdeCatalog, system: string) {
    const scored = catalog.concepts.map(c => {
        const score = Math.max(similarity(entity.name, c.entity), ...compatibleAlias(c, entity, system).map(a => similarity(entity.name, a)));
        const context = (normalize(c.domain) === normalize(domain) ? 2 : 0) + (normalize(c.abe) === normalize(abe) ? 1 : 0);
        return { concept: c, score, context };
    }).filter(c => c.score >= 0.2).sort((a, b) => b.score - a.score || b.context - a.context || (a.concept.path ?? `${a.concept.domain}/${a.concept.abe}/${a.concept.entity}`).localeCompare(b.concept.path ?? `${b.concept.domain}/${b.concept.abe}/${b.concept.entity}`));
    const best = scored[0];
    return { best, ties: best ? scored.filter(c => c.score === best.score && c.context === best.context) : [] };
}
function structure(source: string, choices: string[], kind: 'domain' | 'abe' | 'capability' | 'interface', domain?: string, provenance?: StructuralMatch['provenance']): StructuralMatch {
    const exact = choices.filter(c => normalize(c) === normalize(source));
    const near = choices.filter(c => similarity(c, source) >= 0.55);
    const candidates = [...new Set(exact.length ? exact : near)].sort();
    return { source, domain, provenance, candidates, classification: exact.length === 1 ? 'match' : exact.length > 1 ? 'conflict' : near.length ? 'extension' : kind === 'abe' ? 'candidate-abe' : 'candidate-entity', rationale: exact.length === 1 ? 'Name-aligned structure; business equivalence requires review.' : exact.length > 1 ? 'Several contexts have the same name; review the intended scope.' : near.length ? 'Related terminology; inspect scope before reuse.' : `No existing ${kind} name alignment. Review the source grouping and business meaning.`, action: 'review' };
}
function legacyCatalog(concepts: MdeConcept[]): MdeCatalog { return { concepts, domains: [...new Set(concepts.map(c => c.domain))], abes: [...new Map(concepts.map(c => [`${c.domain}\0${c.abe}`, { name: c.abe, domain: c.domain }])).values()], capabilities: [], interfaces: [], warnings: [] }; }
export function analyze(input: ReferenceModel, model: MdeCatalog | MdeConcept[]): AnalysisReport {
    const reference = validateReference(input);
    const catalog = Array.isArray(model) ? legacyCatalog(model) : model;
    const matches: AnalysisMatch[] = [];
    const warnings = [...(reference.warnings ?? []), ...catalog.warnings];
    const sourceEntities = reference.domains.flatMap(d => d.abes.flatMap(a => a.entities.map(e => ({ entity: e, domain: d.name, abe: a.name }))));
    const mapped = new Map<ReferenceEntity, AnalysisMatch>();
    for (const { entity: e, domain, abe } of sourceEntities) {
        if (e.provenance?.originalType && e.provenance.alignedType !== 'Entity') {
            warnings.push(`Source type ${e.provenance.originalType} is not aligned to Entity: ${e.name}; retained for review.`);
            continue;
        }
        const { best, ties } = candidates(e, domain, abe, catalog, reference.source.system);
        let classification: MatchClassification = 'candidate-entity';
        let rationale = 'No strong concept alignment. Review whether this introduces reusable meaning.';
        let candidate: MdeConcept | undefined = best?.concept;
        let confidence = best?.score ?? 0;
        if (e.sourceSpecific) {
            classification = 'source-specific';
            rationale = 'The source explicitly marks this concept as source-specific; preserve it without assuming cross-industry reuse.';
        }
        else if (ties.length > 1 && best!.score >= 0.55) {
            classification = 'conflict';
            rationale = 'Equally ranked concepts have different canonical homes. Domain/ABE context does not resolve the ambiguity.';
            candidate = undefined;
            confidence = 0;
        }
        else if (best?.score === 1) {
            classification = 'match';
            rationale = 'Name or source-scoped alias aligns with an existing concept; attributes, relationships, and business meaning still require review.';
        }
        else if (best && best.score >= 0.55) {
            classification = 'extension';
            rationale = 'Related terminology suggests additional detail or specialization; name overlap does not prove equivalence.';
        }
        else
            candidate = undefined;
        const attributeGaps = (e.attributes ?? []).map(a => a.name).filter(n => !(candidate?.attributes ?? []).some(a => normalize(a.name) === normalize(n)));
        if (candidate && classification === 'match' && attributeGaps.length) {
            classification = 'extension';
            rationale = 'Name alignment exists, but the source provides logical attributes absent from the selected canonical detail.';
        }
        if (candidate && (e.attributes ?? []).some(a => { const c = candidate!.attributes?.find(x => normalize(x.name) === normalize(a.name)); return c && ((a.type && c.type && normalize(a.type) !== normalize(c.type)) || (a.required !== undefined && c.required !== undefined && a.required !== c.required)); })) {
            classification = 'conflict';
            rationale = 'Source and canonical attribute types or required constraints disagree; review both definitions.';
        }
        const result: AnalysisMatch = { source: { system: reference.source.system, domain, abe, entity: e.name, id: e.id, provenance: e.provenance }, candidate, alternatives: ties.length > 1 ? ties.slice(0, 10).map(t => t.concept) : undefined, classification, confidence: Number(confidence.toFixed(2)), rationale, action: 'review', attributeGaps, relationshipFindings: [] };
        matches.push(result);
        mapped.set(e, result);
    }
    const sourceTarget = (target: string, domain: string, abe: string) => {
        const byid = sourceEntities.filter(x => x.entity.id === target);
        if (byid.length)
            return byid;
        const same = sourceEntities.filter(x => normalize(x.entity.name) === normalize(target));
        const local = same.filter(x => x.domain === domain && x.abe === abe);
        if (local.length)
            return local;
        const within = same.filter(x => x.domain === domain);
        return within.length ? within : same;
    };
    for (const { entity: e, domain, abe } of sourceEntities) {
        const result = mapped.get(e);
        if (!result)
            continue;
        if (e.specializes) {
            const parents = sourceTarget(e.specializes, domain, abe);
            const parent = parents.length === 1 ? mapped.get(parents[0].entity)?.candidate : undefined;
            if (parent) {
                if (!['conflict', 'source-specific'].includes(result.classification)) {
                    if (result.candidate && result.candidate.path && result.candidate.path !== parent.path) {
                        result.classification = 'specialization';
                        result.rationale = 'The source declares a specialization; compare its parent and refinements with the canonical ancestor chain.';
                    }
                    else if (!result.candidate) {
                        result.candidate = parent;
                        result.classification = 'specialization';
                        result.rationale = 'Source-declared generalization points to a mapped parent; review the specialization detail.';
                    }
                }
            }
            else
                warnings.push(`Unresolved or ambiguous specialization parent ${e.specializes} for ${e.name}.`);
        }
        for (const rel of e.relationships ?? []) {
            const targets = sourceTarget(rel.target, domain, abe);
            const target = targets.length === 1 ? mapped.get(targets[0].entity)?.candidate : undefined;
            let status = 'unresolved-target';
            if (targets.length > 1)
                status = 'ambiguous-target';
            else if (target && result.candidate) {
                const existing = (result.candidate.relationships ?? []).filter(r => normalize(r.name) === normalize(rel.name) && (r.target === target.path || normalize(r.target) === normalize(target.entity)));
                if (!existing.length)
                    status = 'missing-relationship';
                else if (rel.cardinality && existing.every(r => r.cardinality && r.cardinality.replace(/\s/g, '').toLowerCase() !== rel.cardinality!.replace(/\s/g, '').toLowerCase()))
                    status = 'cardinality-review';
                else if (['kind', 'lifecycle', 'cascade'].some(k => rel[k] && existing.every(r => r[k] && JSON.stringify(r[k]) !== JSON.stringify(rel[k]))))
                    status = 'semantic-conflict';
                else
                    status = 'aligned';
            }
            else if (target)
                status = 'unmapped-source';
            result.relationshipFindings!.push({ relationship: rel, status });
            if (status === 'semantic-conflict' || status === 'cardinality-review') {
                result.classification = 'conflict';
                result.rationale = 'Source relationship constraints differ from canonical evidence; review without overwriting either model.';
            }
        }
    }
    const domainMatches = reference.domains.map(d => structure(d.name, catalog.domains, 'domain', undefined, d.provenance));
    const abeMatches = reference.domains.flatMap(d => d.abes.map(a => structure(a.name, catalog.abes.filter(x => normalize(x.domain) === normalize(d.name)).map(x => x.name), 'abe', d.name, a.provenance)));
    const capabilityMatches = (reference.capabilities ?? []).map(c => structure(c.name, catalog.capabilities.map(x => x.name), 'capability', undefined, c.provenance));
    const interfaceMatches = (reference.interfaces ?? []).map(c => structure(c.name, catalog.interfaces.map(x => x.name), 'interface', undefined, c.provenance));
    const categories: MatchClassification[] = ['match', 'specialization', 'extension', 'candidate-abe', 'candidate-entity', 'source-specific', 'conflict'];
    const all = [...matches, ...domainMatches, ...abeMatches, ...capabilityMatches, ...interfaceMatches];
    const summary = Object.fromEntries(categories.map(category => [category, all.filter(m => m.classification === category).length])) as Record<MatchClassification, number>;
    return { source: reference.source, matches, domainMatches, abeMatches, capabilityMatches, interfaceMatches, summary, unmapped: reference.unmapped ?? [], warnings, adoption: 'manual-review-only' };
}
