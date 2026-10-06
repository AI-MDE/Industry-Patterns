import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { importModel } from '../src/importer.ts';
const tool = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const aliases = JSON.parse(readFileSync(path.join(tool, 'terminology-aliases.json'), 'utf8'));
const yaml = `# OpenAPI YAML source
openapi: 3.0.3
info:
  title: Synthetic Service
  version: '1'
  description: |
    First line
    Second line
components:
  schemas:
    Person:
      type: object
      properties:
        name: &stringProperty
          type: string
        nickname: *stringProperty
    Claim:
      type: object
      required: [patient]
      properties:
        patient:
          $ref: '#/components/schemas/Person'
paths:
  /claims:
    post:
      operationId: createClaim
      x-retain: yes
`;
test('OpenAPI YAML preserves multiline text, aliases, local references, operations and source hash', () => {
    const options = { file: 'source.yml', aliases };
    const result = importModel(yaml, 'bian-openapi', options);
    const api = (result.extensions as any).originalOpenApi;
    assert.equal(api.info.description, 'First line\nSecond line\n');
    assert.equal(api.paths['/claims'].post['x-retain'], 'yes');
    assert.deepEqual(api.components.schemas.Person.properties.nickname, { type: 'string' });
    assert.equal(result.domains[0].abes[0].entities[1].relationships![0].target, 'Person');
    assert.equal(result.interfaces![0].name, 'createClaim');
    assert.equal(result.source.sha256, createHash('sha256').update(yaml).digest('hex'));
    const json = importModel(JSON.stringify(api), 'bian-openapi', options);
    assert.deepEqual({ ...result, source: { ...result.source, sha256: undefined } }, { ...json, source: { ...json.source, sha256: undefined } });
});
test('OpenAPI YAML rejects malformed or ambiguous source documents', () => {
    for (const input of ['openapi: [', yaml + '\ninfo: {}', yaml + '\n---\nfoo: bar', yaml + '\nx-extra: !unknown value', yaml + '\nx-cycle: &cycle [*cycle]'])
        assert.throws(() => importModel(input, 'bian-openapi', { file: 'bad.yaml', aliases }));
    assert.throws(() => importModel('openapi: 2.0\ninfo: {title: Invalid}', 'bian-openapi', { file: 'bad.yaml', aliases }), /OpenAPI 3.x/);
});
test('CLI imports .yaml and .yml directly with bian-openapi', async () => {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'mde-yaml-test-'));
    try {
        for (const extension of ['yaml', 'yml']) {
            const input = path.join(dir, `source.${extension}`);
            const output = path.join(dir, `${extension}.json`);
            await writeFile(input, yaml);
            const result = spawnSync(process.execPath, [path.join(tool, 'src/index.ts'), 'import', input, '--adapter', 'bian-openapi', '--out', output], { encoding: 'utf8' });
            assert.equal(result.status, 0, result.stderr);
            assert.equal(JSON.parse(await readFile(output, 'utf8')).source.file, input);
        }
    } finally { await rm(dir, { recursive: true, force: true }); }
});

test('CLI analyzes raw YAML like imported normalized JSON and explains a missing adapter', async () => {
    const dir = await mkdtemp(path.join(os.tmpdir(), 'mde-yaml-analyze-test-'));
    try {
        const model = path.join(dir, 'concepts.json');
        await writeFile(model, JSON.stringify([{ domain: 'Party', abe: 'Party', entity: 'Person' }]));
        const cli = (...args: string[]) => spawnSync(process.execPath, [path.join(tool, 'src/index.ts'), ...args], { encoding: 'utf8' });
        for (const extension of ['yaml', 'yml']) {
            const input = path.join(dir, `source.${extension}`);
            const normalized = path.join(dir, `${extension}-normalized.json`);
            await writeFile(input, yaml);
            const missing = cli('analyze', input, '--model', model);
            assert.equal(missing.status, 1);
            assert.match(missing.stderr, /--adapter bian-openapi/);
            const imported = cli('import', input, '--adapter', 'bian-openapi', '--out', normalized);
            assert.equal(imported.status, 0, imported.stderr);
            const expected = cli('analyze', normalized, model);
            assert.equal(expected.status, 0, expected.stderr);
            const actual = cli('analyze', input, '--adapter', 'bian-openapi', '--model', model);
            assert.equal(actual.status, 0, actual.stderr);
            const report = JSON.parse(actual.stdout);
            assert.deepEqual(report, JSON.parse(expected.stdout));
            assert.equal(report.source.adapter, 'bian-openapi');
            assert.ok(report.matches.some((match: any) => match.source.entity === 'Person'));
        }
    } finally { await rm(dir, { recursive: true, force: true }); }
});
