# Reference Model Analyzer

Experimental tooling for comparing external reference models with MDE Industry Patterns.

See [Reference Model Importer and Analyzer](../../docs/reference-model-importer.md) for the architecture and governance rules.

## Current scope

Version 0.1 accepts:

1. a normalized external reference model JSON file;
2. a simple list of existing MDE concepts.

It produces a reviewable JSON report with candidate matches and gaps.

The analyzer is intentionally source-neutral. SID, BIAN, FHIR, ACORD, GS1, and other formats should be implemented as adapters that emit the normalized structure.

## Run

```bash
npm install
npm run analyze -- reference-model.json mde-concepts.json
```

## Example MDE concepts input

```json
[
  {
    "domain": "Resource Management",
    "abe": "Resource",
    "entity": "Resource",
    "aliases": ["Asset Resource"]
  },
  {
    "domain": "Customer Relationship",
    "abe": "Customer",
    "entity": "Customer",
    "aliases": ["Client"]
  }
]
```

## Status

The initial matcher is deliberately simple and deterministic. Its purpose is to establish the import/analyze pipeline and report contract.

Next adapters:

- SID XMI/UML;
- BIAN structured exports;
- later other reference models as useful.

AI-assisted semantic comparison should sit above this deterministic normalized layer rather than be embedded into a source adapter.
