# Reference Model Importer and Analyzer

Import local reference-model exports, preserve their source meaning, and compare them with the coherent Industry-Patterns model. All mappings require review; the tool never adopts concepts automatically.

## Install

Requires Node.js **22.18 or later** (Node 24 recommended). TypeScript runs through Node's built-in type stripping.

```bash
cd tools/reference-model-analyzer
npm install
npm test
npm run typecheck
```

## Complete pipeline

```bash
npm run run -- examples/synthetic-records.json --adapter records-json --out output/example
```

Produces `normalized.json` (source structure, provenance, original payloads, unmapped concepts), `report.json` (mapping candidates and findings), and `report.md` (readable review).

The default target is `../../model/model.json`. Existing output files are protected; choose a new directory or pass `--force` to replace them.

## Individual commands

```bash
npm run import -- /path/source.xmi --adapter sid-xmi --out output/sid-normalized.json
npm run import -- /path/export.csv --adapter bian-csv --out output/bian-normalized.json
npm run import -- /path/openapi.yaml --adapter bian-openapi --out output/bian-api.json
npm run analyze -- output/sid-normalized.json --out output/sid-report.json
npm run analyze -- /path/normalized.json /path/legacy-concepts.json
npm run run -- /path/source.xmi --adapter sid-xmi --out output/sid
```

Use `--system`/`--version` to identify generic sources, `--model` to select a target manifest, and `--aliases` for a custom meta-type terminology table. SID and BIAN adapters default to their source names. Import/analyze prints JSON when `--out` is omitted. `--help` lists options.

## Supported exports

| Adapter | Input | Extracted detail |
|---|---|---|
| `normalized` | Hierarchical normalized JSON | Domains, ABEs, entities, attributes, relationships, capabilities, interfaces, modules, workflows, unknown fields |
| `records-json` | JSON array or `{source, records}` | Named typed records with optional domain/ABE placement and nested arrays |
| `csv` | CSV using the record contract | Quoted commas/newlines, escaped quotes, JSON array cells |
| `sid-xmi` | UML/XMI XML | Named Classes, Package context, ownedAttribute references, binary ownedEnd associations, multiplicities, generalization |
| `bian-json` / `bian-csv` | BIAN records using the record contract | Business Objects → Entities; Service Domains → Modules; Service Operations/Semantic APIs → Interfaces |
| `bian-openapi` | OpenAPI 3.x JSON or YAML (`.yaml` / `.yml`) | Direct schema properties/local schema references and path operations |

These are explicit export contracts, not a claim to parse every vendor dialect. BIAN JSON expects the record contract below. External schema references and vendor-specific XML normalization are not supported. JSON and YAML use the same `bian-openapi` adapter; no conversion step is needed. YAML must contain one document with unique mapping keys; unsupported tags, cyclic structures, and excessive alias expansion are rejected. Schema composition, stereotypes, memberEnd-only associations, multiple inheritance, and unsupported elements are retained in original payloads for review. External OpenAPI references and XML DTD/entity declarations fail clearly.

No external artifacts are downloaded automatically. Use authorized local exports. Committed examples and tests are synthetic, not redistributed standards. The YAML adapter was also verified locally against all 258 public BIAN 14.0.0 API files.

## Record contract

```json
{
  "source": { "system": "SID", "version": "example" },
  "records": [
    { "name": "Party", "type": "Domain" },
    { "name": "Party", "type": "ABE", "domain": "Party" },
    {
      "id": "person-source-id", "name": "Person", "type": "Business Entity",
      "domain": "Party", "abe": "Party",
      "attributes": [{ "name": "Given Name", "type": "string" }],
      "relationships": [{ "name": "represents", "target": "other-source-id", "cardinality": "0..1" }]
    }
  ]
}
```

`type` or `sourceType` is aligned through [terminology-aliases.json](terminology-aliases.json). Unknown and untyped records go to `unmapped` with their original payload. Missing placement uses an explicit `Imported` analysis container. Duplicate source identifiers and duplicate explicit Domain/ABE records fail instead of overwriting identity. Input order does not matter.

CSV uses the same field names. `attributes`, `relationships`, `operations`, and `relatedAbes` cells contain quoted JSON arrays; other columns are retained. `specializes` and relationship targets can use source IDs or names. Ambiguous targets remain findings. `sourceSpecific` accepts `true` or `false`.

See the [normalized JSON Schema](schema/reference-model.schema.json). Runtime checks also enforce source identifier uniqueness and report malformed input locations.

## Analysis and review

The catalog loader reads canonical paths, ABE ownership, specialization references, source-aware business aliases, logical attribute names, and resolved relationship evidence. Legacy arrays of `{domain, abe, entity, aliases}` remain supported.

Matching uses camel-case-aware names, applicable source aliases, and Domain/ABE context. Ties become conflicts with alternatives. Scores measure terminology alignment, not semantic certainty. Even exact matches require review.

Reports contain entity mapping candidates, source-declared specialization, attribute gaps/type conflicts, relationship target ambiguity, missing relationships, cardinality review, declared relationship kind/lifecycle/cascade conflicts, Domain/ABE comparisons, capability/interface candidates, and unmapped constructs.

Canonical cardinalities sometimes contain prose. They are preserved and flagged for review instead of guessing lifecycle/cascade behavior. The current manifest has no separate capability/interface inventory, so those imported structures remain review candidates; reports say so. Modules/workflows remain in normalized output for architecture review.

See the [architecture](../../docs/reference-model-importer.md), [coherent model](../../model/README.md), and [terminology scope](../../docs/terminology-aliases.md).
