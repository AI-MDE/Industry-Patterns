# Coherent Industry Model

Industry-Patterns has one connected semantic model. Shared concepts have one canonical home; industry specializations inherit shared meaning and preserve the details that distinguish their business context.

Start with the [Domain index](domains/index.md), use the [industry catalog](../catalog.md) to discover a suitable pattern, or inspect the [integration review](integration-review.md).

See the [small-business service coverage review](small-business-services-gap-review.md) for added shared service ABEs and remaining gaps.

## Organization

The canonical model is organized as **Domain → ABE → Entity**. Industry profiles compose reusable domains and add only their industry-specific semantics. Every ABE has one Primary Entity and is named after it. Each Entity has its own Markdown page. A domain may reference ABEs from other domains without duplicating their definitions.

Capabilities describe what the business needs and **use ABEs**. They are a selection view of the model. Implementation modules and interfaces belong to architecture; an ABE does not dictate an implementation boundary.

Reusable capabilities, roles, rules, use cases, and workflows have canonical files at the domain level alongside the ABE folders. A use case may involve several ABEs. A cross-domain workflow has one owning domain and links to the other domains' concepts. Entity operations and state vocabulary belong on the canonical entity pages.

```text
domains/health-care/
├── README.md
├── patient/          ABE and its entities
├── schedule/         ABE and its entities
├── capabilities/
├── roles/
├── rules/
├── use-cases/
├── workflows/
├── behavior.md       relationship, lifecycle, event, and rule overview
└── diagrams.md       business views
```

Applications select and specialize this knowledge; their architecture, implementation, UI, and deployment stay in the application. There is no separate knowledge-base entity layer.

The canonical catalog uses named Domain and ABE folders under `model/domains/`. An application may organize selected ABEs under capabilities as described in [Changes to MDE](../docs/changes-to-mde.md). Reusing an ABE across capabilities does not give it multiple canonical definitions.

## Reuse and profile boundaries

Reusable domains such as Party, Agreement, Work Management, Resource Management, and Finance provide concepts used across industries. An industry profile such as Professional Services should reference or specialize those concepts rather than redefine them. [Administration](domains/administration/README.md) records candidate coverage; its areas are not yet registered Domains or ABEs in the manifest.

## Meaning and source terminology

- **Reuse:** Invoice and Payment have shared definitions, with industry-specific attributes and constraints recorded as contextual detail on the same page.
- **Specialization:** Physical Therapy Appointment specializes Health Care Appointment. Industry refinements remain on the specialized page.
- **Distinct meaning:** Insurance Claim and Health Care Claim have separate canonical paths. Equal spelling does not establish equivalence.
- **Alias:** a source-aware term points to a canonical concept without changing its meaning. Aliases never substitute for a specialization relationship.

Canonical paths identify concepts. Display names may be identical in different domains. A consumer must resolve a term using its source or domain rather than choosing the first text match.

The small [business terminology table](terminology-aliases.json) preserves source terminology outside the concept metadata. The existing [importer terminology table](../tools/reference-model-analyzer/terminology-aliases.json) continues to align meta-types such as Business Entity and Entity; these are separate scopes.

## Pattern views

The files in `industry-patterns/` provide business context, variants, modeling questions, selection guidance, and pitfalls. Their concept and behavior sections link to canonical definitions. Each pattern has a binding table showing its selected Entities and ABEs. A pattern explains which requirements to use; the model owns their definitions.

[Recurring Service and Constraint-Based Scheduling](../modeling-patterns/service-scheduling.md) also binds its abstract concepts to the canonical model. Other modeling patterns continue to contribute semantic roles and invariants that are bound to existing concepts. Applying the Case pattern does not automatically create a generic Case entity.

The [Health Care domain](domains/health-care/README.md) contains reusable requirements formerly maintained separately: six capabilities, eight roles, 22 rules, 15 use cases, and four workflows. Its 18 former entity specifications have been reconciled into the existing canonical entity pages.

## Composition

1. Understand the business goal and required capabilities.
2. Select applicable industry and modeling patterns, then the ABEs and detail needed.
3. Bind selected concepts to the application's vocabulary; reuse existing concepts first.
4. Include shared definitions and specialization ancestors needed to understand the selected concepts. Inheritance does not require generating a separate database table for every ancestor.
5. Reconcile identities, relationships, lifecycle restrictions, rule conflicts, and overlapping constraints. Preserve provenance and the distinctions between planning, execution, and evidence.
6. Leave unresolved expressions explicit until business interpretation resolves them. Select an implementation through Architecture.
7. Verify the unified application model against concrete scenarios and the Strategy's verification requirements.

## Machine-readable navigation

[model.json](model.json) contains Domains, ABEs, concept paths, specialization references, pattern selections, source bindings, and relationship expressions. Markdown pages contain the detailed definitions. The JSON is a navigation manifest, not a new application meta-model or runtime schema.

Its `requirements` field points to [requirements.json](requirements.json), which indexes domain-owned capabilities, roles, rules, use cases, and workflows. This separate navigation file keeps the behavioral inventory readable; its entries are not a second model. Cross-domain relationships are summarized in [relationships.md](relationships.md).

Each relationship retains its source, role, and original cardinality. `resolved` means both endpoint expressions point to canonical concepts; it does not certify business validity. `review` preserves an unresolved or compound endpoint. Lifecycle dependency, cascade, and normalized cardinalities must be specified when the application requires them; they are not inferred from a table's prose.

Validate navigation with:

```bash
node tools/coherent-model/validate.mjs
```

## Current coverage

This integration covers existing detailed concept definitions and table relationships across every industry pattern and the scheduling pattern. Some concepts mentioned only in variant lists, non-table diagrams, and future expansions still need detailed modeling. See the [review list](integration-review.md) for the remaining relationship expressions. The changes proposed for MDE's own meta-model remain in [Changes to MDE](../docs/changes-to-mde.md).
