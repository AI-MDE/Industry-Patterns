# Reference Model Importer and Analyzer

## Purpose

The Industry Patterns repository should learn from mature external reference models without becoming a copy of any one industry standard.

The Reference Model Importer and Analyzer provides a controlled way to inspect sources such as TM Forum SID, BIAN, FHIR, ACORD, GS1, or other structured reference models and compare them with MDE Industry Patterns.

The objective is not to target telecom or banking. The objective is to extract reusable modeling ideas that can strengthen models for other business domains.

## Principles

1. External models are **reference sources**, not application models.
2. Source artifacts remain source-specific and retain their licensing constraints.
3. The importer normalizes structure for analysis; it does not republish source material.
4. MDE owns its own Domain, ABE, Entity, Capability, Module, and Interface definitions.
5. Imported concepts are never adopted automatically.
6. AI or a modeler reviews proposed mappings before they become MDE concepts.
7. The analyzer should preserve source provenance for every recommendation.

## Pipeline

```text
External Reference Model
    ↓
Source Adapter
    ↓
Normalized Reference Model
    ↓
Analyzer
    ├── Domain comparison
    ├── ABE candidate discovery
    ├── Entity mapping
    ├── Relationship comparison
    ├── Capability mapping
    └── Gap / overlap analysis
    ↓
Reviewable Mapping Report
    ↓
MDE Industry Model Decisions
```

## Normalized reference model

All source adapters convert their native format into a small common structure:

```text
ReferenceModel
  source
  version
  domains[]
    abes[]
      entities[]
        attributes[]
        relationships[]
  capabilities[]
  interfaces[]
```

The normalized model is an analysis structure only. It is not the MDE canonical model.

## Source adapters

Adapters should be independent.

Examples:

```text
SID XMI / UML
    ↓
SidAdapter

BIAN CSV / UML / OpenAPI
    ↓
BianAdapter

FHIR definitions
    ↓
FhirAdapter
```

Each adapter translates source-specific terms into the normalized structure while preserving the original source identifier and name.

## Analyzer responsibilities

### Domain analysis

Identify broad semantic areas and compare them with existing MDE Domains.

Questions:

- Does an equivalent MDE Domain already exist?
- Is the external domain industry-specific or cross-industry?
- Does it reveal a missing reusable area?

### ABE analysis

ABE is a primary concept in Industry Patterns.

The analyzer should detect cohesive clusters of concepts that may correspond to:

- an existing MDE ABE;
- a richer level of detail within an existing ABE;
- a candidate new ABE.

The analyzer should not create a new ABE merely because a source model groups objects differently.

### Entity analysis

For each external business concept, classify it as:

- equivalent to an existing MDE entity;
- a specialization of an existing entity;
- additional detail within an existing ABE;
- industry-specific and not useful cross-industry;
- a candidate new reusable concept.

### Relationship analysis

Compare relationships, cardinalities, ownership, and lifecycle semantics.

Useful findings include:

- missing relationships;
- duplicated concepts;
- alternate ownership boundaries;
- history/effective-dating requirements;
- composition patterns.

### Capability analysis

Where the source provides capabilities or service domains, compare them with MDE capabilities.

Capability mapping should help answer:

- Which ABEs are needed by a capability?
- How much detail from each ABE is required?
- Is the capability likely to be internal or provided through integration?
- Which interfaces are implied?

### Interface analysis

Where source models expose service operations or APIs, use them to identify candidate MDE module interfaces.

External APIs should not automatically become MDE interfaces. They are evidence about useful boundaries and contracts.

## Analysis result

A mapping result should be explicit and reviewable:

```json
{
  "source": {
    "system": "Example Standard",
    "concept": "CustomerAccount"
  },
  "candidate": {
    "domain": "Customer Relationship",
    "abe": "Customer",
    "entity": "Customer Account"
  },
  "classification": "specialization",
  "confidence": 0.82,
  "rationale": "Represents a customer-specific relationship account rather than a generic financial account.",
  "action": "review"
}
```

## Gap categories

The analyzer should use a small set of gap types:

- **match** — existing MDE concept already covers the semantics;
- **specialization** — source concept is a domain-specific subtype;
- **extension** — useful additional detail within an existing ABE;
- **candidate-abe** — source reveals a reusable semantic cluster not currently modeled;
- **candidate-entity** — source reveals a reusable cross-industry concept;
- **source-specific** — useful only inside the source industry;
- **conflict** — source semantics disagree with an existing MDE concept.

## ABE detail discovery

External models can help identify additional levels of detail inside an existing ABE.

For example:

```text
ABE: Inventory

Core
  Item
  Location
  Quantity

Additional detail discovered from reference models
  Reservation
  Lot / Batch
  Serial Tracking
  Inspection
  Traceability
  Work Order Consumption
```

This does not require a new Profile concept. The ABE remains the primary reusable unit; the application selects the level of detail it needs.

## Intellectual-property boundary

The repository should store:

- importer code;
- normalized schemas;
- mappings authored by MDE;
- gap reports;
- MDE-owned interpretations and resulting models;
- source identifiers and citations.

The repository should not store third-party model artifacts unless their license clearly permits redistribution.

The importer should operate on source files supplied locally by an authorized user or downloaded under appropriate terms.

## Implemented importer

[The importer tool](../tools/reference-model-analyzer/README.md) implements local import, normalization, canonical comparison, and JSON/Markdown review reports.

Supported export contracts are normalized JSON, generic record JSON/CSV, SID-style UML/XMI, BIAN record JSON/CSV, and BIAN OpenAPI 3.x JSON. The tool README defines each adapter's scope; the [normalized schema](../tools/reference-model-analyzer/schema/reference-model.schema.json) defines the common analysis structure.

The analyzer loads the coherent model manifest and Markdown concept pages. Source-aware type alignment uses the small alias table. Original names, types, IDs, payloads, and unsupported constructs remain reviewable.

Equal-name candidates are compared with Domain/ABE context. Unresolved ties become conflicts. Explicit source generalizations support specialization findings. Attributes and relationships are compared where both sides provide evidence. Domain, ABE, capability, and interface comparisons are included. Every mapping requires review; no concept is automatically adopted.

The current canonical manifest has no separate capability/interface inventory. Imported structures therefore remain review candidates until a target inventory is supplied. Adapter dialect limitations are reported. FHIR, ACORD, GS1, and additional vendor-specific adapters remain future work.

## Strategic value

The importer/analyzer gives MDE a repeatable research method:

```text
Mature Reference Models
        ↓
Normalize
        ↓
Compare
        ↓
Extract reusable semantics
        ↓
Strengthen ABEs
        ↓
Apply to new industries
```

The goal is not to inherit the complexity of existing standards. The goal is to use their accumulated modeling experience to improve MDE's smaller, cross-industry, AI-composable semantic model.


## Terminology alignment

The importer preserves each source model's original terminology and uses a separate alias registry to align equivalent terms with canonical MDE terminology.

Registry:

```text
tools/reference-model-analyzer/terminology-aliases.json
```

Example:

```text
SID: Business Entity
  → MDE: Entity

BIAN: Service Domain
  → MDE: Module
```

The original source term remains attached to the imported concept. Unknown terms are preserved as unmapped rather than forced into the current MDE meta-model.

