import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const model = JSON.parse(fs.readFileSync(path.join(root, 'model/model.json'), 'utf8'));
const aliases = JSON.parse(fs.readFileSync(path.join(root, 'model/terminology-aliases.json'), 'utf8'));
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const exists = p => typeof p === 'string' && fs.existsSync(path.join(root, p));
const index = (items, key, label) => {
  const result = new Map();
  for (const item of items) {
    check(!result.has(item[key]), `Duplicate ${label}: ${item[key]}`);
    result.set(item[key], item);
  }
  return result;
};
const concepts = index(model.concepts, 'path', 'concept');
const abes = index(model.abes, 'path', 'ABE');
const domains = index(model.domains, 'name', 'domain');
const memberships = new Map();
for (const domain of domains.values()) {
  check(exists(domain.path), `Missing domain page: ${domain.path}`);
  for (const p of domain.abes) check(abes.get(p)?.domain === domain.name, `Invalid domain ABE: ${p}`);
}
for (const abe of abes.values()) {
  check(exists(abe.path), `Missing ABE page: ${abe.path}`);
  const primary = concepts.get(abe.primaryEntity);
  check(primary?.name === abe.name && abe.entities.includes(abe.primaryEntity), `Invalid primary entity: ${abe.path}`);
  check(domains.get(abe.domain)?.abes.includes(abe.path), `Unlisted ABE: ${abe.path}`);
  check(new Set(abe.entities).size === abe.entities.length, `Duplicate ABE membership: ${abe.path}`);
  for (const p of abe.entities) {
    check(concepts.get(p)?.abe === abe.path, `Invalid ABE member: ${p}`);
    memberships.set(p, (memberships.get(p) ?? 0) + 1);
  }
}
for (const concept of concepts.values()) {
  check(exists(concept.path), `Missing concept page: ${concept.path}`);
  check(memberships.get(concept.path) === 1, `Concept must have one ABE home: ${concept.path}`);
  check(abes.get(concept.abe)?.domain === concept.domain, `Wrong concept domain: ${concept.path}`);
  const seen = new Set([concept.path]);
  let parent = concept.specializes;
  while (parent) {
    if (!concepts.has(parent)) { errors.push(`Unknown ancestor: ${parent}`); break; }
    if (seen.has(parent)) { errors.push(`Specialization cycle: ${concept.path}`); break; }
    seen.add(parent); parent = concepts.get(parent).specializes;
  }
}
const bindingKeys = new Set();
for (const b of model.bindings) {
  const key = JSON.stringify([b.source, b.section, b.term]);
  check(!bindingKeys.has(key), `Duplicate source binding: ${key}`); bindingKeys.add(key);
  check(exists(b.source) && concepts.has(b.concept), `Invalid source binding: ${key}`);
}
for (const p of model.patterns) {
  const expected = new Set(model.bindings.filter(b => b.source === p.source).map(b => concepts.get(b.concept)?.abe));
  check(expected.size === p.abes.length && p.abes.every(a => expected.has(a)), `Wrong pattern ABE selection: ${p.source}`);
}
for (const a of aliases.aliases) check(model.bindings.some(b => b.source === a.source && b.term === a.term && b.concept === a.canonical), `Alias lacks binding: ${a.term}`);
for (const r of model.relationships) {
  check(exists(r.source) && r.role && r.cardinality, `Incomplete relationship: ${JSON.stringify(r)}`);
  for (const key of ['sourceConcept', 'targetConcept']) check(r[key] === null || concepts.has(r[key]), `Unknown relationship endpoint: ${r[key]}`);
  check(r.status === (r.sourceConcept && r.targetConcept ? 'resolved' : 'review'), `Wrong resolution status: ${r.sourceTerm}`);
}

// Check local links on model pages and the pattern views affected by this integration.
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const pages = [...walk(path.join(root, 'model')), ...model.patterns.map(p => path.join(root, p.source))].filter(p => p.endsWith('.md'));
for (const page of pages) {
  const text = fs.readFileSync(page, 'utf8');
  for (const match of text.matchAll(/\[[^\]\n]+\]\(([^\s)]+)\)/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#)/.test(target)) continue;
    const [file, fragment] = target.split('#');
    const resolved = path.resolve(path.dirname(page), file);
    check(fs.existsSync(resolved), `Broken link in ${path.relative(root, page)}: ${target}`);
    if (!fs.existsSync(resolved) || !fragment || !resolved.endsWith('.md')) continue;
    const headings = [...fs.readFileSync(resolved, 'utf8').matchAll(/^#{1,6} (.+)$/gm)].map(m => m[1].toLowerCase().replace(/[^\w\- ]/g, '').replace(/ /g, '-'));
    check(headings.includes(fragment), `Missing heading in ${path.relative(root, page)}: ${target}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Valid: ${domains.size} Domains, ${abes.size} ABEs, ${concepts.size} concepts, ${model.bindings.length} source bindings, ${model.relationships.length} relationships (${model.relationships.filter(r => r.status === 'review').length} for semantic review).`);
