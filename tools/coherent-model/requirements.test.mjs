import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateRequirements } from './requirements.mjs';

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'industry-requirements-'));
  t.after(() => {
    assert.ok(path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep));
    fs.rmSync(root, { recursive: true, force: true });
  });
  const write = (file, text) => {
    fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
    fs.writeFileSync(path.join(root, file), text);
  };
  const model = {
    requirements: 'model/requirements.json',
    subjects: [{ name: 'Care', path: 'model/subjects/care/README.md' }],
    abes: [{ path: 'model/subjects/care/patient/README.md' }],
    concepts: [{ path: 'model/subjects/care/patient/patient.md' }],
  };
  const entry = { type: 'use-case', name: 'Register Patient', subject: 'Care', path: 'model/subjects/care/use-cases/register.md' };
  const page = '---\ntype: use-case\ntitle: "Register Patient"\n---\n\n# Register Patient\n\n## Invoked Entity Operations\n\n[Patient.register](../patient/patient.md#operations)\n';
  write(entry.path, page);
  write(model.concepts[0].path, '# Patient\n\n## Operations\n\n- register\n\n## States\n\nactive\n');
  const registry = items => write(model.requirements, JSON.stringify({ requirements: items }));
  registry([entry]);
  return { root, model, entry, page, write, registry };
}

test('accepts a subject-owned use case that invokes an existing canonical operation', t => {
  const f = fixture(t);
  assert.deepEqual(validateRequirements(f.root, f.model).errors, []);
});

test('rejects undefined operations even when the entity link and heading exist', t => {
  const f = fixture(t);
  f.write(f.entry.path, f.page.replace('Patient.register', 'Patient.erase'));
  assert.ok(validateRequirements(f.root, f.model).errors.some(e => e.includes('Undefined operation')));
});

test('rejects duplicated registrations and incorrect subject ownership', t => {
  const f = fixture(t);
  f.registry([f.entry, { ...f.entry, subject: 'Unknown' }]);
  const errors = validateRequirements(f.root, f.model).errors;
  assert.ok(errors.some(e => e.includes('Duplicate requirement')));
  assert.ok(errors.some(e => e.includes('Wrong requirement owner')));
});

test('detects migrated requirements omitted from the inventory', t => {
  const f = fixture(t);
  f.write('model/subjects/care/use-cases/unlisted.md', f.page);
  assert.ok(validateRequirements(f.root, f.model).errors.some(e => e.includes('Unregistered use-case')));
});

test('detects missing pages and inconsistent titles', t => {
  const f = fixture(t);
  f.registry([{ ...f.entry, name: 'Wrong title' }, { ...f.entry, path: 'model/subjects/care/use-cases/missing.md' }]);
  const errors = validateRequirements(f.root, f.model).errors;
  assert.ok(errors.some(e => e.includes('Wrong requirement title')));
  assert.ok(errors.some(e => e.includes('Missing requirement page')));
});

test('rejects a registry outside the repository', t => {
  const f = fixture(t);
  f.model.requirements = '../outside.json';
  assert.deepEqual(validateRequirements(f.root, f.model).errors, ['Missing requirements registry']);
});
