// Moves the canonical model from model/domains/ to model/subjects/ as classification.mjs decides
// (docs/subject-reclassification.md). Dry run by default; --write applies it.
//   node tools/coherent-model/subjects/migrate.mjs [--write]
//
// - Each concept that stays becomes model/subjects/<subject>/<abe>/<concept>.md. A merged concept
//   takes its base member's page (a kept member, a shared domain's first), lists the other members
//   under "Also known as" and "In industries" (their definitions and attributes), and combines the
//   members' source terminology, relationships, rules, and operations.
// - A concept joins the ABE of its former primary entity when that primary lands in the same
//   subject; otherwise it heads an ABE of its own.
// - Application detail leaves the model: each industry pattern names it under "Concepts
//   applications typically add". Legacy conversion's migration concepts become the Data Migration
//   modeling pattern.
// - model.json (subjects, ABEs, concepts, bindings, patterns, relationships), requirements.json,
//   and terminology-aliases.json are rewritten; every local link in the repository is redirected.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SUBJECTS, NEW_CONCEPTS, ABE_GROUPS, codeOf } from "./classification.mjs";

// Ran once, on 2026-10-12, moving model/domains/ to model/subjects/; kept as the record of how.
const WRITE = process.argv.includes("--write");
if (!fs.existsSync(path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", ".."), "model", "domains"))) { console.log("Already migrated: model/domains/ is gone."); process.exit(0); }
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
const abs = (p) => path.join(repo, p);
const read = (p) => fs.readFileSync(abs(p), "utf8").replace(/\r\n/g, "\n");
const posix = (p) => p.split(path.sep).join("/");
const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const model = JSON.parse(read("model/model.json"));
const requirements = JSON.parse(read("model/requirements.json"));
const aliasesFile = JSON.parse(read("model/terminology-aliases.json"));
const subjectName = new Map(SUBJECTS.map(([id, name]) => [id, name]));
const SHARED = new Set(["party", "classification", "product-and-service", "agreement", "request-and-fulfillment", "work-management", "finance", "measurement", "resource-management", "service-management", "scheduling"]);
const PATTERN = { "crane-rental": "industry-patterns/crane-rental-orchestration.md", "e-commerce": "industry-patterns/e-commerce.md", "equipment-service": "industry-patterns/equipment-service.md",
  "financial-services": "industry-patterns/financial-services.md", "health-care": "industry-patterns/health-care.md", insurance: "industry-patterns/insurance.md",
  "legacy-conversion": "industry-patterns/legacy-conversion.md", manufacturing: "industry-patterns/manufacturing.md", "physical-therapy": "industry-patterns/physical-therapy-clinic.md",
  "professional-services": "industry-patterns/professional-services.md", telecommunications: "industry-patterns/telecommunications.md", travel: "industry-patterns/travel.md" };
const DATA_MIGRATION = "modeling-patterns/data-migration.md";
const domainOf = (p) => p.split("/")[2];
const domainTitle = new Map(model.domains.map((d) => [domainOf(d.path), d.name]));
const conceptByPath = new Map(model.concepts.map((c) => [c.path, c]));
const abeByPath = new Map(model.abes.map((a) => [a.path, a]));

// ---- 1. Every concept's fate, and the new concepts (subject, name) ------------------------------
const fates = new Map(); // old path → { kind, subject, name, parent }
for (const c of model.concepts) {
  const [kind, subject, target, rename] = codeOf(domainOf(c.path), c.name).split(":");
  const name = kind === "M" ? target : rename || c.name;
  fates.set(c.path, { kind, subject: subject || null, name, parent: kind === "S" ? target : null });
}
const key = (subject, name) => `${subject}\0${name}`;
const targets = new Map(); // key → { subject, name, members: [old paths], parent, isNew, meaning }
for (const [p, f] of fates) {
  if (!f.subject) continue;
  const k = key(f.subject, f.name);
  const t = targets.get(k) || { subject: f.subject, name: f.name, members: [], parent: null, isNew: false };
  t.members.push(p);
  if (f.parent) t.parent = f.parent;
  targets.set(k, t);
}
for (const [subject, name, meaning] of NEW_CONCEPTS) targets.set(key(subject, name), { subject, name, members: [], parent: null, isNew: true, meaning });
// The base member: a kept member (C, S, K) from a shared domain, else any kept member, else a shared domain's, else the first.
for (const t of targets.values()) {
  const kept = t.members.filter((p) => fates.get(p).kind !== "M");
  const shared = (list) => list.find((p) => SHARED.has(domainOf(p)));
  t.base = shared(kept) || kept[0] || shared(t.members) || t.members[0] || null;
}
const targetOf = (oldPath) => { const f = fates.get(oldPath); return f?.subject ? targets.get(key(f.subject, f.name)) : null; };

// ---- 2. ABEs: a concept joins its former primary's ABE when that lands in the same subject ------
const primaryOf = (oldPath) => abeByPath.get(conceptByPath.get(oldPath)?.abe)?.primaryEntity;
for (const t of targets.values()) {
  const votes = new Map();
  for (const m of t.members) {
    const pt = targetOf(primaryOf(m));
    if (!pt || pt.subject !== t.subject || pt === t) continue;
    const weight = SHARED.has(domainOf(m)) ? 3 : 1;
    votes.set(pt, (votes.get(pt) || 0) + weight);
  }
  t.abeCandidate = [...votes].sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  // A hand grouping wins: the ABE named there (its primary), or none when it names the concept itself.
  const group = ABE_GROUPS[t.subject]?.[t.name];
  if (group) {
    const head = targets.get(key(t.subject, group));
    if (!head) throw new Error(`ABE group ${t.subject}: ${t.name} → unknown ${group}`);
    t.abeCandidate = head === t ? null : head;
  }
  // A concept the hand grouping names as an ABE heads it.
  if (Object.values(ABE_GROUPS[t.subject] || {}).includes(t.name)) t.abeCandidate = null;
}

// Each concept's ABE: follow the candidates to one that has none (its own primary).
for (const t of targets.values()) {
  let h = t; const seen = new Set();
  while (h.abeCandidate && !seen.has(h)) { seen.add(h); h = h.abeCandidate; }
  t.abe = h;
}
const heads = new Set([...targets.values()].map((t) => t.abe));
for (const t of targets.values()) {
  t.abeDir = `model/subjects/${t.subject}/${slug(t.abe.name)}`;
  t.path = `${t.abeDir}/${slug(t.name)}.md`;
}
const abeHeads = [...heads];
const abeReadme = (h) => `model/subjects/${h.subject}/${slug(h.name)}/README.md`;

// ---- 3. Where every old page goes (for links) ---------------------------------------------------
const redirect = new Map(); // old repo path → new repo path (with optional #anchor)
const ADD_ANCHOR = "#concepts-applications-typically-add";
for (const [p, f] of fates) {
  if (f.kind === "A") redirect.set(p, `${PATTERN[domainOf(p)] || "catalog.md"}${ADD_ANCHOR}`);
  else if (f.kind === "P") redirect.set(p, DATA_MIGRATION);
  else redirect.set(p, targetOf(p).path);
}
for (const a of model.abes) {
  const pt = targetOf(a.primaryEntity);
  redirect.set(a.path, pt ? abeReadme(pt.abe) : redirect.get(a.primaryEntity).split("#")[0]);
}
for (const d of model.domains) {
  const dom = domainOf(d.path);
  redirect.set(d.path, PATTERN[dom] || "model/subjects/index.md");
}
redirect.set("model/domains/index.md", "model/subjects/index.md");
const behaviorFiles = fs.readdirSync(abs("model/domains"), { withFileTypes: true }).filter((e) => e.isDirectory() && fs.existsSync(abs(`model/domains/${e.name}/behavior.md`))).map((e) => e.name);
for (const d of behaviorFiles) redirect.set(`model/domains/${d}/behavior.md`, `industry-patterns/behavior/${d}.md`);
if (fs.existsSync(abs("model/domains/health-care/diagrams.md"))) redirect.set("model/domains/health-care/diagrams.md", "model/subjects/care/diagrams.md");
for (const r of requirements.requirements) redirect.set(r.path, r.path.replace("model/domains/health-care/", "model/subjects/care/"));
for (const d of ["capabilities", "roles", "rules", "use-cases", "workflows"]) {
  const dir = `model/domains/health-care/${d}`;
  if (fs.existsSync(abs(`${dir}/README.md`))) redirect.set(`${dir}/README.md`, `model/subjects/care/${d}/README.md`);
}
redirect.set("industry-patterns/legacy-conversion.md", DATA_MIGRATION);
for (const a of ["organization", "human-resources", "facilities", "accounting"]) redirect.set(`model/domains/administration/${a}/README.md`, "model/subjects/index.md");
redirect.set("model/domains/administration/README.md", "model/subjects/index.md");

/** Rewrites the local links of `text`, written at `from` (repo path), for a page living at `to`. */
function relink(text, from, to) {
  return text.replace(/\]\(([^)\s]+)\)/g, (whole, href) => {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#") || href.startsWith("/")) return whole;
    const [p, anchor] = href.split("#");
    const target = posix(path.normalize(path.join(path.dirname(from), decodeURI(p))));
    let dest = redirect.get(target) || target, destAnchor = anchor ? `#${anchor}` : "";
    if (dest.includes("#")) { destAnchor = dest.slice(dest.indexOf("#")); dest = dest.slice(0, dest.indexOf("#")); }
    if (dest === to && !destAnchor) return whole.replace(href, "#");
    let rel = posix(path.relative(path.dirname(to), dest)) || path.basename(dest);
    return `](${dest === to ? "" : rel}${destAnchor})`;
  });
}

// ---- 4. Pages --------------------------------------------------------------------------------
const sections = (text) => {
  const body = text.replace(/^---\n[\s\S]*?\n---\n/, "");
  const lines = body.split("\n");
  const head = [], out = new Map(); let cur = null;
  for (const l of lines) {
    const h = l.match(/^## (.+)$/);
    if (h) { cur = h[1].trim() === "Definition" ? "Definition and detail" : h[1].trim(); if (!out.has(cur)) out.set(cur, []); continue; }
    (cur ? out.get(cur) : head).push(l);
  }
  for (const [k, v] of out) out.set(k, v.join("\n").trim());
  return { head: head.join("\n"), sections: out };
};
const firstPara = (s) => (s || "").split(/\n\n/)[0].replace(/\s+/g, " ").trim();
const attrsOf = (s) => (s || "").match(/^Logical attributes(?: may include)?: (.+)$/m)?.[1] || null;
const tableRows = (s) => (s || "").split("\n").filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l));
const bullets = (s) => (s || "").split("\n").filter((l) => /^\s*[-*] /.test(l));
const writes = new Map(); // repo path → text
const industryOf = (p) => domainTitle.get(domainOf(p)) || domainOf(p);
function conceptPage(t) {
  const lines = ["---", "type: entity", `title: "${t.name}"`, "---", "", `# ${t.name}`, ""];
  const abeHead = t.abe;
  lines.push(`Subject: [${subjectName.get(t.subject)}](../README.md). ABE: [${abeHead.name}](README.md).`, "");
  if (t.parent) {
    const parent = [...targets.values()].filter((x) => x.name === t.parent).sort((a, b) => (a.subject === t.subject ? -1 : 1))[0];
    if (parent) lines.push(`Specializes: [${parent.name}](${posix(path.relative(path.dirname(t.path), parent.path))}). Inherit its meaning; apply the refinements below in this context.`, "");
  }
  const members = t.members.map((p) => ({ p, ...sections(read(p)) }));
  const base = members.find((m) => m.p === t.base);
  const others = members.filter((m) => m.p !== t.base);
  const known = others.filter((m) => conceptByPath.get(m.p).name !== t.name || domainOf(m.p) !== domainOf(t.base));
  if (known.length || (base && conceptByPath.get(base.p).name !== t.name)) {
    const names = [...(base && conceptByPath.get(base.p).name !== t.name ? [base] : []), ...known].map((m) => `${conceptByPath.get(m.p).name} (${industryOf(m.p)})`);
    lines.push(`Also known as: ${[...new Set(names)].join(", ")}.`, "");
  }
  // Definition: the base's, then each other member's own, under "In industries".
  lines.push("## Definition and detail", "");
  if (t.isNew) lines.push(t.meaning, "");
  else lines.push(relink(base.sections.get("Definition and detail") || "", base.p, t.path), "");
  if (others.length) {
    lines.push("### In industries", "");
    for (const m of others) {
      const def = m.sections.get("Definition and detail");
      const attrs = attrsOf(def);
      lines.push(`- **${conceptByPath.get(m.p).name}** (${industryOf(m.p)}): ${relink(firstPara(def).replace(/^Logical attributes.*$/, ""), m.p, t.path)}${attrs ? ` Attributes: ${attrs}` : ""}`);
    }
    lines.push("");
  }
  // The other sections: tables and lists combined across members; anything else from the base.
  const order = [];
  for (const m of members) for (const k of m.sections.keys()) if (k !== "Definition and detail" && !order.includes(k)) order.push(k);
  for (const k of order) {
    const holders = members.filter((m) => m.sections.has(k));
    const parts = holders.map((m) => ({ m, text: relink(m.sections.get(k), m.p, t.path) }));
    let content;
    if (parts.every((x) => tableRows(x.text).length)) {
      const [first] = parts;
      const hdr = first.text.split("\n").filter((l) => /^\|/.test(l)).slice(0, 2);
      const rows = [...new Set(parts.flatMap((x) => tableRows(x.text).slice(1)))].filter((r) => !hdr.includes(r));
      const intro = first.text.split("\n").filter((l) => !/^\|/.test(l)).join("\n").trim();
      content = [intro, intro ? "" : null, ...hdr, ...rows].filter((x) => x !== null).join("\n");
    } else if (parts.every((x) => bullets(x.text).length && bullets(x.text).length === x.text.split("\n").filter((l) => l.trim()).length)) {
      content = [...new Set(parts.flatMap((x) => bullets(x.text)))].join("\n");
    } else content = (parts.find((x) => x.m.p === t.base) || parts[0]).text;
    lines.push(`## ${k}`, "", content.trim(), "");
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}
for (const t of targets.values()) writes.set(t.path, conceptPage(t));
// ABE pages.
for (const h of abeHeads) {
  const members = [...targets.values()].filter((t) => t.abe === h).sort((a, b) => (a === h ? -1 : b === h ? 1 : a.name.localeCompare(b.name)));
  const dir = `model/subjects/${h.subject}/${slug(h.name)}`;
  writes.set(`${dir}/README.md`, ["---", "type: abe", `title: "${h.name}"`, "---", "", `# ${h.name}`, "",
    `Subject: [${subjectName.get(h.subject)}](../README.md). Primary entity: [${h.name}](${slug(h.name)}.md).`, "",
    "## Entities", "", ...members.map((t) => `- [${t.name}](${slug(t.name)}.md)${t === h ? " (primary)" : ""}`), ""].join("\n"));
}
// Subject pages and the index.
for (const [id, name, what] of SUBJECTS) {
  const heads = abeHeads.filter((h) => h.subject === id).sort((a, b) => a.name.localeCompare(b.name));
  const extra = id === "care" ? ["", "## Requirements", "", "Capabilities, roles, rules, use cases, and workflows of health care: [capabilities](capabilities/README.md), [roles](roles/README.md), [rules](rules/README.md), [use cases](use-cases/README.md), [workflows](workflows/README.md), and [business views](diagrams.md)."] : [];
  writes.set(`model/subjects/${id}/README.md`, [`# ${name}`, "", what, "", "Index: [all subjects](../index.md).", "", "## ABEs", "",
    ...heads.map((h) => `- [${h.name}](${slug(h.name)}/README.md): ${[...targets.values()].filter((t) => t.abe === h).length} concepts`), ...extra, ""].join("\n"));
}
writes.set("model/subjects/index.md", ["# Subjects", "", "The canonical model, by **subject**: an area of reusable business knowledge with one coherent responsibility. Industries are [industry patterns](../../catalog.md): they select and explain subjects, and name what an application typically adds. Each subject holds ABEs; each ABE, its entities.", "",
  "| Subject | Responsibility | ABEs | Concepts |", "|---|---|---|---|",
  ...SUBJECTS.map(([id, name, what]) => `| [${name}](${id}/README.md) | ${what} | ${abeHeads.filter((h) => h.subject === id).length} | ${[...targets.values()].filter((t) => t.subject === id).length} |`), ""].join("\n"));
// Health care's requirements, its views, and the behavior pages move with relinked text.
for (const r of requirements.requirements) writes.set(redirect.get(r.path), relink(read(r.path), r.path, redirect.get(r.path)));
for (const d of ["capabilities", "roles", "rules", "use-cases", "workflows"]) {
  const p = `model/domains/health-care/${d}/README.md`;
  if (fs.existsSync(abs(p))) writes.set(redirect.get(p), relink(read(p), p, redirect.get(p)));
}
if (redirect.has("model/domains/health-care/diagrams.md")) writes.set("model/subjects/care/diagrams.md", relink(read("model/domains/health-care/diagrams.md"), "model/domains/health-care/diagrams.md", "model/subjects/care/diagrams.md"));
for (const d of behaviorFiles) { const from = `model/domains/${d}/behavior.md`, to = redirect.get(from); writes.set(to, relink(read(from), from, to)); }

// ---- 5. Patterns: application detail named, migration concepts in their own pattern ----------
const detailByDomain = new Map();
for (const [p, f] of fates) if (f.kind === "A") detailByDomain.set(domainOf(p), [...(detailByDomain.get(domainOf(p)) || []), p]);
const patternFiles = new Set(Object.values(PATTERN));
for (const pf of patternFiles) {
  const dom = Object.keys(PATTERN).find((d) => PATTERN[d] === pf);
  const to = pf === PATTERN["legacy-conversion"] ? DATA_MIGRATION : pf;
  let text = read(pf);
  // A "Canonical concept:" line for a concept that left the model says so instead.
  text = text.replace(/^Canonical concept: \[([^\]]+)\]\(([^)]+)\)\.?$/gm, (line, label, href) => {
    const target = posix(path.normalize(path.join(path.dirname(pf), href.split("#")[0])));
    const f = fates.get(target);
    if (f?.kind === "A") return `Application detail: not in the canonical model; an application adds it ([concepts applications typically add](${ADD_ANCHOR})).`;
    if (f?.kind === "P") return `Data migration concept: see the [Data Migration](${posix(path.relative(path.dirname(to), DATA_MIGRATION)) || "data-migration.md"}#concepts) modeling pattern.`;
    if (f) { const t = targetOf(target); return `Canonical concept: [${t.name}](${href})${t.name !== label ? ` (as ${label})` : ""}.`; }
    return line;
  });
  text = relink(text, pf, to);
  const detail = detailByDomain.get(dom) || [];
  if (detail.length) {
    text = text.replace(/\n*$/, "\n\n");
    text += ["## Concepts applications typically add", "", "Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.", "",
      ...detail.map((p) => { const def = firstPara(sections(read(p)).sections.get("Definition and detail")); return `- **${conceptByPath.get(p).name}**: ${def.replace(/\s*Logical attributes.*$/, "")}`; }), ""].join("\n");
  }
  if (to === DATA_MIGRATION) {
    text = text.replace(/^# .+$/m, "# Data Migration");
    const moved = [...fates].filter(([, f]) => f.kind === "P").map(([p]) => p);
    text = text.replace(/\n*$/, "\n\n") + ["## Concepts", "", "The concepts of a data migration (formerly the Legacy Conversion domain). They describe a migration project, not the business: an application that converts legacy data defines them in its own Specs. Identity, ownership, and data quality are in the [Information Governance](../model/subjects/information/README.md) subject.", "",
      ...moved.map((p) => { const def = firstPara(sections(read(p)).sections.get("Definition and detail")); return `- **${conceptByPath.get(p).name}**: ${def.replace(/\s*Logical attributes.*$/, "")}`; }), ""].join("\n");
  }
  writes.set(to, text);
}

// ---- 6. Every other Markdown page: links redirected ---------------------------------------
const skip = /^(references|node_modules|\.git|model\/domains)(\/|$)/;
const allMd = [];
(function walk(dir) {
  for (const e of fs.readdirSync(abs(dir || "."), { withFileTypes: true })) {
    const p = dir ? `${dir}/${e.name}` : e.name;
    if (skip.test(p) || e.name.startsWith(".")) continue;
    if (e.isDirectory()) walk(p); else if (e.name.endsWith(".md")) allMd.push(p);
  }
})("");
for (const p of allMd) if (!writes.has(p) && !patternFiles.has(p)) {
  const text = read(p), next = relink(text, p, p);
  if (next !== text) writes.set(p, next);
}

// ---- 7. The manifest, requirements, and aliases ---------------------------------------------
const newPath = (old) => targetOf(old)?.path || null;
const conceptsOut = [...targets.values()].map((t) => {
  const parent = t.parent ? [...targets.values()].filter((x) => x.name === t.parent).sort((a, b) => (a.subject === t.subject ? -1 : 1))[0] : null;
  return { path: t.path, name: t.name, subject: subjectName.get(t.subject), abe: abeReadme(t.abe), specializes: parent ? parent.path : null };
}).sort((a, b) => a.path.localeCompare(b.path));
const abesOut = abeHeads.map((h) => ({ path: abeReadme(h), name: h.name, subject: subjectName.get(h.subject), primaryEntity: h.path,
  entities: [...targets.values()].filter((t) => t.abe === h).map((t) => t.path).sort() })).sort((a, b) => a.path.localeCompare(b.path));
const subjectsOut = SUBJECTS.map(([id, name]) => ({ name, path: `model/subjects/${id}/README.md`, abes: abesOut.filter((a) => a.subject === name).map((a) => a.path) }));
const bindings = [], seen = new Set();
for (const b of model.bindings) {
  const c = newPath(b.concept); if (!c) continue;
  const source = b.source === PATTERN["legacy-conversion"] ? DATA_MIGRATION : b.source;
  const k = JSON.stringify([source, b.section, b.term]); if (seen.has(k)) continue; seen.add(k);
  bindings.push({ ...b, source, concept: c });
}
const patternsOut = model.patterns.map((pt) => {
  const source = pt.source === PATTERN["legacy-conversion"] ? DATA_MIGRATION : pt.source;
  return { ...pt, source, abes: [...new Set(bindings.filter((b) => b.source === source).map((b) => conceptsOut.find((c) => c.path === b.concept).abe))].sort() };
}).filter((pt) => pt.abes.length);
const relationships = model.relationships.map((r) => {
  const sourceConcept = r.sourceConcept ? newPath(r.sourceConcept) : null, targetConcept = r.targetConcept ? newPath(r.targetConcept) : null;
  const source = r.source === PATTERN["legacy-conversion"] ? DATA_MIGRATION : r.source;
  return { ...r, source, sourceConcept, targetConcept, status: sourceConcept && targetConcept ? "resolved" : "review" };
});
const manifest = { version: model.version, subjects: subjectsOut, abes: abesOut, concepts: conceptsOut, patterns: patternsOut, bindings, relationships, requirements: model.requirements };
const reqOut = { ...requirements, requirements: requirements.requirements.map((r) => ({ type: r.type, name: r.name, subject: "Health Care", path: redirect.get(r.path),
  ...(r.relatedAbes ? { relatedAbes: [...new Set(r.relatedAbes.map((a) => redirect.get(a)).filter((a) => a && a.startsWith("model/subjects/") && a.endsWith("/README.md") && abesOut.some((x) => x.path === a)))] } : {}) })) };
const aliasesOut = { ...aliasesFile, aliases: [] };
const aliasSeen = new Set();
const addAlias = (term, source, canonical) => {
  const k = JSON.stringify([term, source, canonical]);
  if (aliasSeen.has(k) || !bindings.some((b) => b.source === source && b.term === term && b.concept === canonical)) return;
  aliasSeen.add(k); aliasesOut.aliases.push({ term, source, canonical });
};
for (const a of aliasesFile.aliases) { const c = newPath(a.canonical); if (c) addAlias(a.term, a.source === PATTERN["legacy-conversion"] ? DATA_MIGRATION : a.source, c); }
// A merged member's own name is an alias of its common concept, where its pattern binds it.
for (const b of bindings) { const t = conceptsOut.find((c) => c.path === b.concept); if (t && b.term !== t.name) addAlias(b.term, b.source, b.concept); }

// ---- Report, and write -------------------------------------------------------------------------
const kinds = {}; for (const f of fates.values()) kinds[f.kind] = (kinds[f.kind] || 0) + 1;
console.log(`concepts ${model.concepts.length} → ${conceptsOut.length} (${JSON.stringify(kinds)}, new ${NEW_CONCEPTS.length}); ABEs ${model.abes.length} → ${abesOut.length}; subjects ${subjectsOut.length}`);
console.log(`bindings ${model.bindings.length} → ${bindings.length}; patterns ${model.patterns.length} → ${patternsOut.length}; relationships resolved ${model.relationships.filter((r) => r.status === "resolved").length} → ${relationships.filter((r) => r.status === "resolved").length}; aliases ${aliasesFile.aliases.length} → ${aliasesOut.aliases.length}`);
console.log(`pages to write ${writes.size}; requirements ${reqOut.requirements.length}`);
if (process.argv.includes("--abes")) for (const [id] of SUBJECTS) {
  const hs = abeHeads.filter((h) => h.subject === id);
  console.log(`${id}: ` + hs.map((h) => { const n = [...targets.values()].filter((t) => t.abe === h).map((t) => t.name); return n.length > 1 ? `[${n.join(", ")}]` : n[0]; }).join(" | "));
}
if (!WRITE) { console.log("dry run: nothing written (--write to apply)"); process.exit(0); }
for (const [p, text] of writes) { fs.mkdirSync(path.dirname(abs(p)), { recursive: true }); fs.writeFileSync(abs(p), text.endsWith("\n") ? text : `${text}\n`); }
fs.writeFileSync(abs("model/model.json"), `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync(abs("model/requirements.json"), `${JSON.stringify(reqOut, null, 2)}\n`);
fs.writeFileSync(abs("model/terminology-aliases.json"), `${JSON.stringify(aliasesOut, null, 2)}\n`);
fs.rmSync(abs("model/domains"), { recursive: true, force: true });
if (fs.existsSync(abs(PATTERN["legacy-conversion"]))) fs.rmSync(abs(PATTERN["legacy-conversion"]));
console.log("written; model/domains/ and the legacy-conversion pattern removed");
