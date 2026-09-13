# Architecture Specification

Architecture records durable engineering decisions and constraints that affect multiple features, components, or future changes.

Architecture documents should normally state:

- Decision or principle
- Rationale
- Constraints / rules
- Consequences
- Exceptions or unresolved alternatives, when applicable

Architecture should not duplicate business requirements or low-level code structure.

## Reference defaults

`framework/method/metamodel/architecture-defaults/` holds a reference set of architecture
topic documents (`overview.md`, `api.md`, `persistence.md`, `ui.md`, `testing.md`,
`deployment.md`, `governance.md`, `observability-and-identity.md`, `domain-and-access.md`,
`validation.md`), copied from a real application's specs. Most of their content is
generic engineering guidance that applies to any small application built on this
framework's default stack; a small amount is that application's own specific decisions.

An application's own `specs/architecture/*.md` should not restate the generic guidance
found here. Instead:

- state only what is genuinely specific to that application (its actual entities,
  capabilities, stack choices, or any decision that differs from the default);
- cite the reference default it follows, e.g. "Follows
  `framework/method/metamodel/architecture-defaults/api.md`. No overrides beyond the
  app-specific decision below.";
- if a default does not apply or is deliberately overridden, say so explicitly rather
  than silently omitting or contradicting it.

A topic file with nothing application-specific to add beyond the reference default may
be a single line citing it. This is a reference template to copy guidance from and
diverge from deliberately, not a live include mechanism — copying its wording into an
app file without attribution recreates the duplication this is meant to avoid.

### Consolidating into overview.md

An application with little or nothing specific to say for most topics may consolidate
into `architecture/overview.md` alone (plus `architecture/diagrams.md`, which is always
app-specific) instead of keeping a separate near-empty file per topic. In that case,
`overview.md` must list every topic — including those with no app-specific content —
each naming the `architecture-defaults/*.md` file it follows and, in a line or a table,
the application's specific decision or gap for that topic, or "No overrides" when there
is none. Prefer this consolidated form while the application is small or specs-only;
split a topic into its own file once it accumulates enough application-specific content
to justify standing on its own (see `structure.md`: "topic documents... rather than
object-per-file").

## Diagrams

Every application must maintain the following diagrams, in a text-based, version-
controllable format (e.g. Mermaid) so they live alongside and stay consistent with the
specifications and code they describe, rather than as a separate, driftable artifact:

- Architecture diagram — the system's components/layers and their dependencies.
- Use-case diagram — actors and the use cases they perform.
- Logical Data Model (LDM) — business entities and their relationships, independent of storage.
- Physical Data Model (PDM) — the persisted schema (tables, columns, keys, constraints).
- Interaction diagram(s) — sequence/flow of key use-case scenarios across UI, API, and persistence.
- State-machine diagram(s) — lifecycle states and transitions for entities with meaningful states.

These are mandatory from the application's initial scaffolding, not deferred until the
application grows: create them (even minimally, matching the initial small scope) at the
same time as the first architecture and design specifications, and update them whenever
a change affects what they depict. A diagram that has fallen out of date with the
application is worse than no diagram — treat updating it as part of the change, not a
follow-up task.

Place architecture-level diagrams in `architecture/diagrams.md` and design-level diagrams
(e.g. the PDM, page/navigation diagrams) in `design/diagrams.md`, consistent with
`structure.md`. An application may split diagrams into more than one file as they grow,
provided each diagram above remains present and easy to find.
