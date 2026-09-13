---
type: architecture
---

# Architecture Validation

## Decision

Architecture validation must produce an item-by-item conformance report against every architecture topic specification under `specs/architecture/`.

## Rationale

The architecture specifications are durable engineering constraints, not background reading. Validation must make drift visible by comparing implemented behavior, code organization, tests, documentation, diagrams, configuration, and operational behavior against each stated architecture rule.

## Required Report

An architecture validation report must include:

- each architecture topic and numbered architecture item that was checked;
- a status for each item: `Pass`, `Partial`, `Fail`, or `N/A`;
- concise evidence for each status, including implementation file references, test references, documentation references, or missing-artifact evidence;
- findings ordered by severity when a mismatch creates implementation, operational, security, maintainability, or user-facing risk;
- test gaps where executable tests do not cover required architecture behavior;
- documentation or diagram drift where maintained specifications, generated docs, or diagrams contradict the implementation or each other.

## Validation Scope

The report must cover, at minimum:

- architecture overview and architectural shape;
- domain behavior, application operations, identity, and access control;
- API boundary, endpoint contracts, validation, and error discipline;
- persistence schema, migrations, constraints, data access boundaries, seed data, and audit requirements;
- web UI architecture, states, routing, reference display, and selector stability;
- testing architecture, traceability, coverage measurement, and persistence integration testing;
- deployment architecture, configuration, secrets handling, database setup, health behavior, and operator documentation;
- maintained architecture and design diagrams.

## Evidence Rules

Use direct evidence from the repository. Prefer file and line references for code and specification findings. Passing tests are useful evidence, but a passing test suite does not prove conformance when required architecture behavior is untested.

When the implementation intentionally diverges from architecture, the report must identify whether the architecture specification should be updated, the implementation should be changed, or both.

## Consequences

Architecture validation is not complete when it only reports build or test success. It must identify structural and behavioral conformance gaps, including missing layers or boundaries when the architecture calls for separation even if exact folder names are not prescribed.
