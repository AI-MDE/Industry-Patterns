# Reference sources

Source snapshots support the [reference-model importer](../tools/reference-model-analyzer/README.md). They are evidence for review, not additional canonical models. The unified model remains in [model/](../model/README.md).

## BIAN 14.0.0

The [BIAN snapshot](bian-14.0.0/README.md) includes 258 public API YAML files, two upstream README files, the [license](bian-14.0.0/LICENSE), and [source provenance](bian-14.0.0/source-provenance.json) with upstream paths, commit, URLs, and blob hashes.

The snapshot was relocated from the nested public-sources folder without changing its contents. The redundant ZIP was removed after checking that all 262 archive files match the extracted snapshot (allowing only checkout line-ending differences). Git history retains the original archive. Upstream paths in provenance intentionally retain their original spelling.

## Workday public documentation (seed)

The [Workday reference intake](workday/README.md) stages an attributed, small set of business objects, capabilities, and business process patterns for semantic review. It does **not** represent an import of Workday's complete schemas or tenant-specific workflows; no Workday concepts have yet been promoted to the canonical model.
