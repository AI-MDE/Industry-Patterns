import test from 'node:test';
import assert from 'node:assert/strict';
import { importModel } from '../src/importer.ts';

const opts = { file: 'example.json' };
test('behavior import preserves capabilities, workflows, rules, roles, events and source evidence', () => {
  const input = { source: { system: 'Example', version: '1', license: 'test' }, records: [
    { id: 'cap', name: 'Hiring', type: 'capability' },
    { id: 'wf', name: 'Hire', type: 'process', steps: [{ name: 'Approve', condition: 'policy', actor: 'manager' }] },
    { id: 'rule', name: 'Check Policy', type: 'business-rule', predicate: 'configured' },
    { id: 'role', name: 'Manager', type: 'role' },
    { id: 'event', name: 'Hire Completed', type: 'event' },
    { id: 'unknown', name: 'Proprietary Construct', type: 'vendor-unknown' }
  ], extra: { keep: true } };
  const model = importModel(JSON.stringify(input), 'behavior-json', opts);
  assert.equal(model.capabilities?.length, 1);
  assert.equal(model.workflows?.length, 1);
  assert.equal((model.workflows![0] as any).steps[0].condition, 'policy');
  assert.equal((model.extensions as any).businessRules[0].predicate, 'configured');
  assert.equal((model.extensions as any).roles[0].name, 'Manager');
  assert.equal((model.extensions as any).events[0].name, 'Hire Completed');
  assert.equal(model.unmapped?.[0].provenance.originalId, 'unknown');
  assert.deepEqual((model.extensions as any).sourceExtensions.extra, { keep: true });
  assert.equal(model.source.license, 'test');
});
test('behavior import rejects duplicate identifiers, invalid types, and missing source', () => {
  const row = { id: 'one', name: 'A', type: 'workflow' };
  assert.throws(() => importModel(JSON.stringify({ source: { system: 'X' }, records: [row,row] }), 'behavior-json', opts), /Duplicate/);
  assert.throws(() => importModel(JSON.stringify({ records: [row] }), 'behavior-json', opts), /source.system/);
});
