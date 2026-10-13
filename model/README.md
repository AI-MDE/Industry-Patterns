# Coherent Industry Model

Industry-Patterns has one connected semantic model of **common models only**. Each concept has one canonical home; industry specializations inherit shared meaning and record what distinguishes their business context. An application selects what it needs and adds its own concepts in its own Specs.

Start with the [Subject index](subjects/index.md), use the [industry catalog](../catalog.md) to discover a suitable pattern, or inspect the [integration review](integration-review.md). How the model came to be organized by subject, concept by concept, is in the [subject reclassification](../docs/subject-reclassification.md).

## Organization

The canonical model is organized as **Subject → ABE → Entity**. A **subject** is an area of reusable business knowledge with one coherent responsibility (the *subject data areas* of the Data Model Resource Book): Parties and Roles, Agreements and Entitlements, Billing and Payments, Workforce, and so on. Most subjects serve every industry; a few are owned by one (Health Care, Insurance Coverage and Claims, Financial Accounts, Service Provisioning and Networks, Production, Travel).

**Industries are not subjects.** Health care, crane rental, and travel are [industry patterns](../industry-patterns/): they select and explain subjects, give variants and modeling questions, and name the concepts an application of that kind typically adds (each pattern's *Concepts applications typically add*). A concept many applications of an industry need stays in the model, specializing a common one; a concept only one kind of business needs is the application's.

Every ABE has one Primary Entity and is named after it; its folder's `README.md` declares `type: abe`. Each Entity has its own Markdown page (`type: entity`). A merged concept's page gives its common definition, the names it is known by in industries (*Also known as*), and each industry's own definition and attributes (*In industries*).

Capabilities describe what the business needs and **use ABEs**. They are a selection view of the model. Implementation modules and interfaces belong to architecture; an ABE does not dictate an implementation boundary.

Reusable capabilities, roles, rules, use cases, and workflows have canonical files at the subject level alongside the ABE folders (today, Health Care's). Entity operations and state vocabulary belong on the canonical entity pages.

```text
subjects/care/
├── README.md
├── patient/          ABE and its entities
├── care-plan/        ABE and its entities
├── capabilities/
├── roles/
├── rules/
├── use-cases/
├── workflows/
└── diagrams.md       business views
```

An industry's relationship, role, lifecycle, event, and rule overview is industry context: it lives with the patterns, in [industry-patterns/behavior/](../industry-patterns/behavior/).

Applications select and specialize this knowledge; their architecture, implementation, UI, and deployment stay in the application. An application may organize selected ABEs under its own capabilities, as MDE does ([Changes to MDE](../docs/changes-to-mde.md)); reusing an ABE across capabilities does not give it multiple canonical definitions.

## Meaning and source terminology

- **Common concept:** one definition, recurring across industries under different names. Charge, for instance, is also a crane-rental Charge Event, a financial Fee, a therapy charge, a professional-services Billing Event, and telecom Rated Usage; each industry's own definition and attributes stay on the page.
- **Specialization:** a variation many applications of an industry need, adding reusable knowledge, specializes a common concept (Rental Agreement specializes Agreement). Its refinements remain on the specialized page.
- **Alias:** a source-aware term points to a canonical concept without changing its meaning ([terminology-aliases.json](terminology-aliases.json)). Aliases never substitute for a specialization relationship.

Canonical paths identify concepts. A consumer resolves a term through its source and the aliases rather than by the first text match.

The [business terminology table](terminology-aliases.json) preserves source terminology outside the concept metadata. The [importer terminology table](../tools/reference-model-analyzer/terminology-aliases.json) aligns meta-types such as Business Entity and Entity; these are separate scopes.

## Pattern views

The files in `industry-patterns/` provide business context, variants, modeling questions, selection guidance, and pitfalls. Their concept sections link to canonical definitions, or say that a concept is application detail. Each pattern's bindings select its Entities and ABEs. A pattern explains which requirements to use; the model owns their definitions.

[Modeling patterns](../modeling-patterns/catalog.md) bind their abstract roles to the canonical model. [Data Migration](../modeling-patterns/data-migration.md), formerly the Legacy Conversion domain, describes a migration project rather than the business; identity, ownership, and data quality are in the Information Governance subject.

## Composition

1. Understand the business goal and required capabilities.
2. Select applicable industry and modeling patterns, then the ABEs and detail needed.
3. Bind selected concepts to the application's vocabulary; reuse existing concepts first.
4. Include shared definitions and specialization ancestors needed to understand the selected concepts. Inheritance does not require generating a separate database table for every ancestor.
5. Add what the application needs and the model does not carry: the pattern's *Concepts applications typically add*, specializing the canonical concepts named.
6. Reconcile identities, relationships, lifecycle restrictions, rule conflicts, and overlapping constraints. Leave unresolved expressions explicit until business interpretation resolves them.
7. Verify the application model against concrete scenarios and the Strategy's verification requirements.

## Machine-readable navigation

[model.json](model.json) contains the subjects, ABEs, concept paths, specialization references, pattern selections, source bindings, and relationship expressions. Markdown pages contain the detailed definitions. The JSON is a navigation manifest, not an application meta-model or runtime schema.

Its `requirements` field points to [requirements.json](requirements.json), which indexes subject-owned capabilities, roles, rules, use cases, and workflows. Cross-subject relationships are summarized in [relationships.md](relationships.md).

Each relationship retains its source, role, and original cardinality. `resolved` means both endpoints are canonical concepts; it does not certify business validity. `review` preserves an unresolved or compound endpoint, or one that is now application detail.

Validate with:

```bash
node tools/coherent-model/validate.mjs
```

## Current coverage

24 subjects, 80 ABEs, 307 concepts. Some concepts mentioned only in variant lists, diagrams, and future expansions still need detailed modeling; see the [review list](integration-review.md) for the relationship expressions still under review. The changes proposed for MDE's own meta-model remain in [Changes to MDE](../docs/changes-to-mde.md).
