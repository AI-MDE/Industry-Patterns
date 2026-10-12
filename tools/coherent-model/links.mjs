import fs from 'node:fs';
import path from 'node:path';

// Generated analysis output and installed dependencies are not repository docs.
const ignored = new Set(['.git', 'node_modules', 'output']);
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry =>
  ignored.has(entry.name) || entry.isSymbolicLink() ? [] : entry.isDirectory()
    ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);

function prose(text) {
  let fence;
  return text.split(/\r?\n/).map(line => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = undefined;
      return '';
    }
    return fence ? '' : line;
  }).join('\n');
}

export function validateLinks(root) {
  root = path.resolve(root);
  const errors = [];
  const cache = new Map();
  const read = file => {
    if (!cache.has(file)) cache.set(file, prose(fs.readFileSync(file, 'utf8')));
    return cache.get(file);
  };
  const anchors = new Map();
  const headings = file => {
    if (!anchors.has(file)) {
      const used = new Set();
      for (const match of read(file).matchAll(/^ {0,3}#{1,6}\s+(.+?)(?:\s+#+)?\s*$/gm)) {
        const slug = match[1].toLowerCase().replace(/[^\p{L}\p{N}\p{M}_\- ]/gu, '').replace(/ /g, '-');
        let unique = slug, suffix = 0;
        while (used.has(unique)) unique = `${slug}-${++suffix}`;
        used.add(unique);
      }
      anchors.set(file, used);
    }
    return anchors.get(file);
  };
  const pages = walk(root).filter(file => file.endsWith('.md'));
  for (const page of pages) {
    const text = read(page);
    const targets = [
      ...[...text.matchAll(/\[[^\]\n]*\]\(<?([^\s)>]+)>?(?:\s+"[^"]*")?\)/g)].map(m => m[1]),
      ...[...text.matchAll(/^ {0,3}\[[^\]\n]+\]:\s*<?([^\s>]+)>?/gm)].map(m => m[1]),
    ];
    for (const target of targets) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(target)) continue;
      let file, fragment;
      try { [file, fragment] = target.split('#').map(decodeURIComponent); }
      catch { errors.push(`Invalid link in ${path.relative(root, page)}: ${target}`); continue; }
      const resolved = file ? path.resolve(path.dirname(page), file) : page;
      if (!resolved.startsWith(root + path.sep) && resolved !== root) {
        errors.push(`Link escapes repository in ${path.relative(root, page)}: ${target}`);
      } else if (!fs.existsSync(resolved)) {
        errors.push(`Broken link in ${path.relative(root, page)}: ${target}`);
      } else if (fragment && resolved.endsWith('.md') && !headings(resolved).has(fragment)) {
        errors.push(`Missing heading in ${path.relative(root, page)}: ${target}`);
      }
    }
  }
  return { errors, pages: pages.length };
}
