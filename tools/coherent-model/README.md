# Canonical model validation

Requires Node.js 22.18 or later; no packages need to be installed.

From the repository root:

```bash
node tools/coherent-model/validate.mjs
node --test tools/coherent-model/links.test.mjs
```

The validator checks the [manifest](../../model/model.json) against canonical files, Domain and ABE membership, one ABE home per concept, primary entities, specialization ancestry, source bindings, pattern selections, aliases, and relationship endpoint/status consistency.

It also checks local inline Markdown links, reference-link destinations, and heading fragments across repository Markdown pages, including discovery indexes, docs, knowledge bases, and tools. Fenced code examples, installed dependencies, Git internals, and generated `output/` directories are excluded. External URLs are not fetched. A nonzero exit code indicates a structural or local-link failure.

The 104 relationship expressions marked `review` are preserved semantic questions. Passing validation does not resolve their business meaning or certify cardinalities. See the [integration review](../../model/integration-review.md).
