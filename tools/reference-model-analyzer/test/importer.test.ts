import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { importModel, parseCsv } from '../src/importer.ts';
import { analyze } from '../src/analyzer.ts';
import { loadCatalog } from '../src/catalog.ts';
import { validateReference } from '../src/validation.ts';
import type { MdeConcept, ReferenceModel } from '../src/types.ts';
const tool = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const aliases = JSON.parse(readFileSync(path.join(tool, 'terminology-aliases.json'), 'utf8'));
const options = { file: 'synthetic.json', system: 'SID', aliases };
const ref = (entities: any[], domain = 'Health Care', abe = 'Claim'): ReferenceModel => ({ source: { system: 'Example' }, domains: [{ name: domain, abes: [{ name: abe, entities }] }] });
const catalog: MdeConcept[] = [{ domain: 'Health Care', abe: 'Claim', entity: 'Claim', path: 'health/claim.md', attributes: [{ name: 'amount', type: 'number', required: true }] }, { domain: 'Insurance', abe: 'Claim', entity: 'Claim', path: 'insurance/claim.md' }, { domain: 'Party', abe: 'Party', entity: 'Person', path: 'party/person.md' }];
test('normalized import preserves source metadata, extensions, identifiers and unknown types', () => {
    const raw = { ...ref([{ id: 'q', name: 'Behavior', sourceType: 'Behavior Qualifier', extra: { keep: true } }]), custom: { keep: 'root' } };
    const result = importModel(JSON.stringify(raw), 'normalized', options);
    assert.deepEqual(result.custom, raw.custom);
    assert.equal(result.domains[0].abes[0].entities[0].provenance!.originalId, 'q');
    assert.equal(result.unmapped![0].sourceType, 'Behavior Qualifier');
    assert.equal(analyze(result, catalog).matches.length, 0);
});
test('source-aware type aliases route BIAN Service Domain into modules and keep unknown concepts', () => {
    const records = [{ id: 'a', name: 'Party', type: 'Business Object', domain: 'Party', abe: 'Party' }, { name: 'CustomerService', type: 'Service Domain' }, { name: 'Qualifier', type: 'Behavior Qualifier' }];
    const imported = importModel(JSON.stringify(records), 'bian-json', { ...options, system: undefined });
    assert.equal(imported.domains[0].abes[0].entities[0].name, 'Party');
    assert.equal(imported.modules![0].name, 'CustomerService');
    assert.equal(imported.unmapped![0].name, 'Qualifier');
    assert.deepEqual(imported.unmapped![0].provenance.original, records[2]);
    const wrong = importModel(JSON.stringify(records), 'records-json', { ...options, system: 'Unrelated' });
    assert.equal(wrong.domains.length, 0);
    assert.equal(wrong.unmapped!.length, 3);
});
test('CSV handles BOM, commas, multiline quoted values, escaped quotes and JSON attributes', () => {
    const rows = parseCsv('\uFEFFname,type,description,attributes\r\n"Example, One",Entity,"line one\nline ""two""","[{""name"":""Code""}]"\r\n');
    assert.equal(rows[0].description, 'line one\nline "two"');
    assert.deepEqual(rows[0].attributes, [{ name: 'Code' }]);
    assert.throws(() => parseCsv('name,name\na,b'), /unique/);
    assert.throws(() => parseCsv('name,type\n"oops'), /Unterminated/);
    assert.throws(() => parseCsv('name,type\nA,B,C'), /fields/);
});
test('record placement is independent of input order and duplicate identifiers fail', () => {
    const records = [{ name: 'Person', type: 'Entity', domain: 'Party', abe: 'Party' }, { name: 'Party', type: 'ABE', domain: 'Party' }, { name: 'Party', type: 'Domain' }];
    const m = importModel(JSON.stringify(records), 'records-json', options);
    assert.equal(m.domains[0].abes[0].entities[0].name, 'Person');
    assert.throws(() => importModel(JSON.stringify([{ id: 'a', name: 'A', type: 'Entity' }, { id: 'a', name: 'B', type: 'Entity' }]), 'records-json', options), /Duplicate/);
});
test('SID UML/XMI retains class IDs, properties, references, multiplicity, generalization and unknown elements', () => {
    const xml = `<xmi:XMI xmlns:xmi="http://www.omg.org/XMI" xmlns:uml="http://www.omg.org/UML"><uml:Model name="Synthetic"><packagedElement xmi:type="uml:Package" name="Party"><packagedElement xmi:type="uml:Package" name="Party"><packagedElement xmi:type="uml:Class" xmi:id="p" name="Person"><ownedAttribute name="code" type="String"/></packagedElement><packagedElement xmi:type="uml:Class" xmi:id="e" name="Employee"><generalization general="p"/><ownedAttribute name="manager" type="p"><lowerValue value="0"/><upperValue value="1"/></ownedAttribute></packagedElement><packagedElement xmi:type="uml:DataType" xmi:id="s" name="String"/></packagedElement></packagedElement></uml:Model></xmi:XMI>`;
    const m = importModel(xml, 'sid-xmi', { ...options, system: undefined });
    const entities = m.domains[0].abes[0].entities;
    assert.equal(entities[1].specializes, 'p');
    assert.equal(entities[1].relationships![0].target, 'p');
    assert.equal(entities[1].relationships![0].cardinality, '0..1');
    assert.equal(entities[0].attributes![0].name, 'code');
    assert.equal(m.unmapped![0].sourceType, 'uml:DataType');
    assert.ok(m.extensions);
    assert.throws(() => importModel('<!DOCTYPE x [<!ENTITY evil "x">]><x/>', 'sid-xmi', options), /DTD/);
    assert.throws(() => importModel('<x><y></x>', 'sid-xmi', options));
});
test('BIAN OpenAPI extracts local schema references and interfaces without making service domains ABEs', () => {
    const api = { openapi: '3.0.3', info: { title: 'Synthetic Service', version: '1' }, components: { schemas: { Person: { type: 'object', properties: { name: { type: 'string' } } }, Claim: { type: 'object', properties: { patient: { $ref: '#/components/schemas/Person' } }, required: ['patient'] } } }, paths: { '/claims': { post: { operationId: 'createClaim', 'x-retain': 'yes' } } } };
    const m = importModel(JSON.stringify(api), 'bian-openapi', { ...options, system: undefined });
    assert.equal(m.modules![0].name, 'Synthetic Service');
    assert.equal(m.domains[0].abes[0].entities[1].relationships![0].cardinality, '1');
    assert.equal(m.interfaces![0].name, 'createClaim');
    assert.ok(m.extensions);
    (api.components.schemas.Claim.properties.patient as any).$ref = 'https://example.invalid/schema';
    assert.throws(() => importModel(JSON.stringify(api), 'bian-openapi', { ...options, system: undefined }), /Only local/);
});
test('malformed normalized data is rejected with useful locations', () => {
    assert.throws(() => validateReference({ source: { system: 'SID' }, domains: [{ name: 'D', abes: null }] }), /D.abes/);
    assert.throws(() => validateReference(ref([{ name: 'E', relationships: [{ name: 'owns' }] }])), /target/);
    assert.throws(() => validateReference(ref([{ id: 'a', name: 'A' }, { id: 'a', name: 'B' }])), /Duplicate/);
});
test('binary XMI associations are resolved and multiple inheritance is preserved without choosing a parent', () => {
    const xml = '<xmi:XMI xmlns:xmi="http://www.omg.org/XMI" xmlns:uml="http://www.omg.org/UML"><uml:Model><packagedElement xmi:type="uml:Class" xmi:id="a" name="A"/><packagedElement xmi:type="uml:Class" xmi:id="b" name="B"><generalization general="a"/><generalization general="c"/></packagedElement><packagedElement xmi:type="uml:Class" xmi:id="c" name="C"/><packagedElement xmi:type="uml:Association" xmi:id="ab"><ownedEnd name="owner" type="a"/><ownedEnd name="items" type="b"><lowerValue value="0"/><upperValue value="*"/></ownedEnd></packagedElement></uml:Model></xmi:XMI>';
    const m = importModel(xml, 'sid-xmi', options);
    const es = m.domains[0].abes[0].entities;
    assert.equal(es[0].relationships![0].target, 'b');
    assert.equal(es[0].relationships![0].cardinality, '0..*');
    assert.deepEqual(es[1].generalizations, ['a', 'c']);
    assert.equal(es[1].specializes, undefined);
    assert.ok(m.warnings!.some(w => w.includes('Multiple inheritance')));
});
test('untyped and unknown records are preserved, and duplicate structural records cannot overwrite provenance', () => {
    const m = importModel(JSON.stringify([{ name: 'Untyped', extra: 'keep' }]), 'records-json', options);
    assert.equal(m.domains.length, 0);
    assert.equal(m.unmapped![0].sourceType, 'unknown');
    assert.equal((m.unmapped![0].provenance.original as any).extra, 'keep');
    assert.throws(() => importModel(JSON.stringify([{ name: 'D', type: 'Domain' }, { name: 'D', type: 'Domain' }]), 'records-json', options), /Duplicate structural/);
});
test('record imports retain source metadata and top-level extensions', () => {
    const input = { source: { system: 'Example', version: '2', uri: 'urn:synthetic:reference', rights: 'synthetic fixture' }, records: [{ name: 'Person', type: 'Entity' }], extension: { retain: true } };
    const result = importModel(JSON.stringify(input), 'records-json', { ...options, system: undefined });
    assert.equal(result.source.uri, input.source.uri);
    assert.equal(result.source.rights, input.source.rights);
    assert.deepEqual((result.extensions as any).extension, input.extension);
});
test('same-name concepts are resolved by context; unscoped ties remain conflicts', () => {
    const scoped = analyze(ref([{ name: 'Claim' }]), catalog);
    assert.equal(scoped.matches[0].candidate!.path, 'health/claim.md');
    assert.equal(scoped.matches[0].action, 'review');
    const unknown = analyze(ref([{ name: 'Claim' }], 'Unknown', 'Unknown'), catalog);
    assert.equal(unknown.matches[0].classification, 'conflict');
    assert.equal(unknown.matches[0].candidate, undefined);
    assert.equal(unknown.matches[0].alternatives!.length, 2);
});
test('attribute differences, explicit specialization and source-specific flags are reviewable', () => {
    assert.equal(analyze(ref([{ name: 'Claim', attributes: [{ name: 'amount', type: 'string' }] }]), catalog).matches[0].classification, 'conflict');
    assert.equal(analyze(ref([{ name: 'Claim', attributes: [{ name: 'detail' }] }]), catalog).matches[0].classification, 'extension');
    const specialized = analyze(ref([{ id: 'p', name: 'Person' }, { name: 'Employee', specializes: 'p' }], 'Party', 'Party'), catalog);
    assert.equal(specialized.matches[1].classification, 'specialization');
    assert.equal(specialized.matches[1].candidate!.entity, 'Person');
    assert.equal(analyze(ref([{ name: 'Special Record', sourceSpecific: true }]), catalog).matches[0].classification, 'source-specific');
});
test('relationship cardinality differences and unresolved targets are surfaced', () => {
    const known = [{ ...catalog[0], relationships: [{ name: 'concerns', target: 'party/person.md', cardinality: '1' }] }, catalog[2]];
    const m = analyze(ref([{ name: 'Claim', relationships: [{ name: 'concerns', target: 'Person', cardinality: '0..1' }, { name: 'owns', target: 'Missing' }] }, { name: 'Person' }]), known);
    assert.equal(m.matches[0].classification, 'conflict');
    assert.deepEqual(m.matches[0].relationshipFindings!.map(x => x.status), ['cardinality-review', 'unresolved-target']);
});
test('aliases from unrelated sources cannot resolve business identity', () => {
    const c = [{ domain: 'D', abe: 'A', entity: 'Resource Capability', scopedAliases: [{ term: 'Capability', source: 'schedule-source' }] }];
    const unrelated = analyze(ref([{ name: 'Capability' }], 'D', 'A'), c).matches[0];
    assert.notEqual(unrelated.classification, 'match');
    assert.equal(unrelated.candidate, undefined);
    const input = ref([{ name: 'Capability', provenance: { file: 'schedule-source', locator: 'r', originalName: 'Capability', originalType: 'Entity', alignedType: 'Entity' } }], 'D', 'A');
    assert.equal(analyze(input, c).matches[0].classification, 'match');
});
test('coherent catalog loads canonical paths, logical attributes and relationship evidence', async () => {
    const m = await loadCatalog(path.resolve(tool, '../../model/model.json'));
    assert.equal(m.concepts.length, 543);
    assert.equal(m.abes.length, 104);
    assert.ok(m.concepts.find(x => x.entity === 'Payment')!.attributes!.length);
    assert.ok(m.concepts.some(x => x.relationships!.length));
    assert.ok(m.warnings.length);
});
test('CLI pipeline writes three outputs, preserves analyzed provenance, refuses overwrite, and leaves canonical model unchanged', async () => {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'mde-import-test-'));
    const canonical = path.resolve(tool, '../../model/model.json');
    const before = await readFile(canonical, 'utf8');
    try {
        const input = path.join(dir, 'input.csv');
        await writeFile(input, 'name,type,domain,abe\nPerson,Entity,Party,Party\nMystery,Unknown,Party,Party\n');
        const out = path.join(dir, 'report');
        const invoke = (args: string[]) => spawnSync(process.execPath, [path.join(tool, 'src/index.ts'), ...args], { encoding: 'utf8' });
        const first = invoke(['run', input, '--adapter', 'csv', '--out', out]);
        assert.equal(first.status, 0, first.stderr);
        const report = JSON.parse(await readFile(path.join(out, 'report.json'), 'utf8'));
        assert.equal(report.matches[0].candidate.entity, 'Person');
        assert.equal(report.unmapped[0].name, 'Mystery');
        assert.ok((await readFile(path.join(out, 'report.md'), 'utf8')).includes('Entity mappings'));
        assert.equal(invoke(['run', input, '--adapter', 'csv', '--out', out]).status, 1);
        assert.equal(invoke(['run', input, '--adapter', 'csv', '--out', out, '--force']).status, 0);
        const again = invoke(['analyze', path.join(out, 'normalized.json')]);
        assert.equal(again.status, 0, again.stderr);
        assert.equal(JSON.parse(again.stdout).matches[0].source.provenance.file, input);
        assert.equal(await readFile(canonical, 'utf8'), before);
        assert.equal(invoke(['run', input, '--adapter', 'wrong', '--out', out]).status, 1);
        const protectedWrite = invoke(['import', input, '--adapter', 'csv', '--out', canonical, '--force']);
        assert.equal(protectedWrite.status, 1);
        assert.match(protectedWrite.stderr, /canonical model/);
        assert.equal(await readFile(canonical, 'utf8'), before);
    }
    finally {
        await rm(dir, { recursive: true, force: true });
    }
});
