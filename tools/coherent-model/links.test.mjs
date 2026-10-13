import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateLinks } from './links.mjs';

function fixture(t, files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'industry-links-'));
  t.after(() => {
    assert.ok(path.resolve(root).startsWith(path.resolve(os.tmpdir()) + path.sep));
    fs.rmSync(root, { recursive: true, force: true });
  });
  for (const [name, content] of Object.entries(files)) {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  }
  return root;
}

test('validates discovery and subject requirement links', t => {
  const root = fixture(t, {
    'catalog.md': '[Domains](model/requirements/index.md)',
    'model/subjects/example/use-cases/register.md': '[Entity](../missing.md)',
    'model/subjects/index.md': '# Subjects',
  });
  const result = validateLinks(root);
  assert.equal(result.pages, 3);
  assert.equal(result.errors.length, 2);
  assert.ok(result.errors.every(error => error.startsWith('Broken link')));
});

test('checks same-page, duplicate-heading and encoded file fragments', t => {
  const root = fixture(t, {
    'README.md': '# Start\n[here](#start)\n[duplicate](docs/My%20Page.md#detail-1)\n[missing](#absent)',
    'docs/My Page.md': '# Detail\n## Detail',
  });
  assert.deepEqual(validateLinks(root).errors, ['Missing heading in README.md: #absent']);
});

test('checks reference destinations and rejects repository escapes', t => {
  const root = fixture(t, {
    'README.md': '[guide][ref]\n\n[ref]: docs/missing.md\n[outside](../outside.md)',
  });
  const errors = validateLinks(root).errors;
  assert.equal(errors.length, 2);
  assert.ok(errors.some(error => error.startsWith('Broken link')));
  assert.ok(errors.some(error => error.startsWith('Link escapes repository')));
});

test('ignores fenced examples, external URLs and generated directories', t => {
  const root = fixture(t, {
    'README.md': '```md\n[fake](missing.md)\n```\n~~~md\n[fake](other.md)\n~~~\n[web](https://example.com)\n[mail](mailto:example@example.com)',
    'node_modules/example/README.md': '[fake](missing.md)',
    'output/report.md': '[fake](missing.md)',
    '.git/hidden.md': '[fake](missing.md)',
  });
  assert.deepEqual(validateLinks(root), { errors: [], pages: 1 });
});
