# Repository structure and ownership

## Three responsibilities

| Area | Responsibility |
|---|---|
| [Canonical model](../model/README.md) | Define reusable business concepts and behavior once. |
| [Industry guides](../catalog.md) | Explain industry context, variants, selection, questions, and pitfalls. |
| Actual application | Record selected and specialized requirements and define architecture, UI, integration, deployment, and tests. |

Industry guides live in `industry-patterns/`. A concept keeps its existing Domain → ABE → Entity identity. Domain-level capabilities, roles, rules, use cases, and workflows reference those canonical entities. A workflow spanning several domains has one owner and explicit cross-domain references.

## Health Care consolidation

The former separate requirements collection has been removed. Its 15 use cases, four workflows, six capabilities, eight roles, and 22 rules now live directly under [Health Care](../model/domains/health-care/README.md). Eighteen entity specifications were merged into existing canonical entities; no new entity identities were created. Canonical attributes already covered the selected vocabulary except Service Delivery's Service Code, which was retained in its canonical attribute list. Operations invoked by use cases, including search and authorized audit query, now appear on their target entity pages.

Business constraints and diagrams were retained in the domain. Architecture placeholders, configuration for the separate collection, and suggested UI page names were removed; the actual app makes those decisions. Cross-domain relationships and the 104 unresolved semantic expressions remain unchanged apart from renamed source paths.

## Industry definition overviews

Industry relationship, role, lifecycle, event, and rule sections moved to domain `behavior.md` pages. Guides retain section anchors linking to the model. Shared integrity rules live on their governing canonical entities, and the [cross-domain relationship view](../model/relationships.md) connects shared concepts. These overviews preserve existing detail and uncertainty; they do not claim all industries have complete standalone use-case specifications.

## Navigation

[model.json](../model/model.json) retains the structural registry and points to [requirements.json](../model/requirements.json) for the behavioral inventory. Both index one model. Validation checks ownership, links, requirement registration, and use-case operation references. Applications should not treat these navigation files as a runtime schema.
