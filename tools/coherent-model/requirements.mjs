import fs from 'node:fs';
import path from 'node:path';

const folders = { capability: 'capabilities', role: 'roles', 'business-rule': 'rules', 'use-case': 'use-cases', workflow: 'workflows' };

export function validateRequirements(root, model) {
  root = path.resolve(root);
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const local = value => {
    if (typeof value !== 'string' || path.isAbsolute(value)) return null;
    const resolved = path.resolve(root, value);
    return resolved.startsWith(root + path.sep) ? resolved : null;
  };
  const registry = local(model.requirements);
  if (!registry || !fs.existsSync(registry)) return { errors: ['Missing requirements registry'], requirements: [] };
  let requirements;
  try { requirements = JSON.parse(fs.readFileSync(registry, 'utf8')).requirements; }
  catch (error) { return { errors: [`Invalid requirements registry: ${error.message}`], requirements: [] }; }
  if (!Array.isArray(requirements)) return { errors: ['Requirements registry must contain an array'], requirements: [] };
  const subjects = new Map(model.subjects.map(d => [d.name, d]));
  const concepts = new Set(model.concepts.map(c => c.path));
  const abes = new Set(model.abes.map(a => a.path));
  const registered = new Set();
  for (const entry of requirements) {
    if (!entry || typeof entry !== 'object') { errors.push('Invalid requirement entry'); continue; }
    check(!registered.has(entry.path), `Duplicate requirement: ${entry.path}`);
    registered.add(entry.path);
    const subject = subjects.get(entry.subject);
    const folder = folders[entry.type];
    check(subject && folder, `Unknown requirement subject/type: ${entry.path}`);
    const expected = subject && folder ? path.posix.join(path.posix.dirname(subject.path), folder) + '/' : null;
    check(expected && typeof entry.path === 'string' && entry.path.startsWith(expected), `Wrong requirement owner: ${entry.path}`);
    check(!concepts.has(entry.path) && !abes.has(entry.path), `Requirement duplicates structural identity: ${entry.path}`);
    if (entry.relatedAbes !== undefined) {
      check(Array.isArray(entry.relatedAbes) && entry.relatedAbes.every(a => abes.has(a)), `Unknown capability ABE: ${entry.path}`);
    }
    const file = local(entry.path);
    if (!file || !fs.existsSync(file) || !fs.statSync(file).isFile()) { errors.push(`Missing requirement page: ${entry.path}`); continue; }
    const text = fs.readFileSync(file, 'utf8');
    check(text.match(/^type: (.+)\r?$/m)?.[1].trim() === entry.type, `Wrong requirement type: ${entry.path}`);
    check(text.match(/^title: "(.+)"\r?$/m)?.[1] === entry.name, `Wrong requirement title: ${entry.path}`);
    if (entry.type === 'use-case') {
      const calls = [...text.matchAll(/\[([^\]\n]+)\]\(([^\s)]+)#operations\)/g)];
      check(calls.length > 0, `Use case lacks canonical operation references: ${entry.path}`);
      for (const [, label, target] of calls) {
        const canonical = path.posix.normalize(path.posix.join(path.posix.dirname(entry.path), target));
        const entityFile = local(canonical);
        const operation = label.includes('.') ? label.slice(label.lastIndexOf('.') + 1) : null;
        check(concepts.has(canonical), `Unknown operation entity: ${entry.path}: ${target}`);
        if (!entityFile || !fs.existsSync(entityFile)) continue;
        const body = fs.readFileSync(entityFile, 'utf8').match(/^## Operations\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1] ?? '';
        const operations = [...body.matchAll(/^- ([\w-]+)\s*$/gm)].map(m => m[1]);
        check(operation && operations.includes(operation), `Undefined operation: ${entry.path}: ${label}`);
      }
    }
  }
  // Detect relocated files accidentally omitted from the machine-readable inventory.
  for (const subject of model.subjects) {
    for (const [type, folder] of Object.entries(folders)) {
      const directory = local(path.posix.join(path.posix.dirname(subject.path), folder));
      if (!directory || !fs.existsSync(directory)) continue;
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === 'README.md') continue;
        const file = path.join(directory, entry.name);
        const relative = path.relative(root, file).split(path.sep).join('/');
        check(registered.has(relative), `Unregistered ${type}: ${relative}`);
      }
    }
  }
  return { errors, requirements };
}
