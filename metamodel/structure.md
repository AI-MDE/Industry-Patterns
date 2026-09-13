# Specification Structure

An application's root normally contains `app/`, `configuration/`, `specs/`, and `work/`.
This file defines the structure of `specs/`; `work/` (the durable work-record folder) is
defined in `framework/method/workflow/rules/change-tracking.md`, not here, since it is workflow
record-keeping rather than modeled application knowledge.

```text
specs/
├── requirements/
│   ├── domain.md
│   ├── capabilities/
│   ├── entities/
│   ├── use-cases/
│   ├── workflows/
│   ├── rules/
│   └── roles/
├── architecture/
│   ├── overview.md
│   └── ... additional architecture topics as needed
└── design/
    ├── pages/
    ├── api/
    ├── data/
    └── integrations/
```

## Structural rules

- `requirements/domain.md` is a single overview file, not a per-instance concept — it does not get a subfolder.
- Each entity, use case, workflow, business rule, role, page, API contract, and integration with independent identity should normally have its own file.
- Capability folders may group related concepts, but grouping does not replace explicit relationships.
- Architecture may use topic documents because architecture decisions are often cross-cutting rather than object-per-file.
- New folders should correspond to a stable knowledge type, not a temporary task or phase.
- An application's `architecture/*.md` topic files should cite, not restate, the generic guidance in `framework/method/metamodel/architecture-defaults/`; see `architecture.md` (§Reference defaults).
