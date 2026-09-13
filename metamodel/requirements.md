# Requirements Specification Concepts

## Required contents

A requirements specification for an application must capture, at minimum: the domain, its
capabilities, business rules, roles, workflows, entities, and use cases. Omit a category
only when the business genuinely has nothing to say for it (e.g. no cross-use-case
workflow exists yet) — do not skip a category merely because it takes effort to write.

## Domain

The overall business domain the application serves: its purpose, scope/boundaries, and
the areas of responsibility (capabilities) it decomposes into. One `requirements/domain.md`
file per application; it is an overview, not a per-instance concept.

Recommended outline:
- Purpose
- Scope / Boundaries
- Capability Map (links to `requirements/capabilities/*.md`)
- Glossary, when domain terms are not self-evident

## Capability

A meaningful business ability or area of responsibility supported by the application.

Recommended outline:
- Purpose
- Scope
- Actors / Roles
- Entities
- Use Cases
- Rules
- Relationships to other capabilities

## Entity

A durable business concept with identity, information, behavior, relationships, or lifecycle relevant to the application.

Recommended outline:
- Purpose
- Attributes
- Relationships
- Operations
- States
- Rules

## Use Case

A structured behavioral specification describing how an actor or external trigger uses the system to achieve a meaningful goal.

Recommended outline:
- Goal
- Actors
- Trigger
- Preconditions
- Input
- Context
- Flow
- Alternatives / Conditions
- Outcome
- Output
- Postconditions
- Related Use Cases
- Invoked Entity Operations
- Related Pages

Use one file per use case. Do not group many use cases into one document merely because they are related.

## Workflow

A durable, end-to-end business process or lifecycle that sequences multiple use cases,
actors, and states over time — distinct from a single use case in that it spans more than
one actor-triggered interaction (e.g. a multi-step approval process, an onboarding
sequence, or a status lifecycle driven by more than one use case).

Recommended outline:
- Purpose
- Trigger
- Participants / Roles
- Steps (referencing the Use Cases and Rules each step invokes)
- Resulting States / Transitions
- Exceptions / Alternate Paths
- Related Use Cases
- Related Rules

Use one file per workflow. Do not model a workflow only as prose inside a capability or
use case file when it has its own identity spanning multiple use cases — link to it
instead. A capability with no process spanning multiple use cases has no workflow to
document; do not invent one.

## Business Rule

A durable business constraint, derivation, authorization, eligibility condition, or policy that governs business behavior.

Recommended outline:
- Statement
- Applies To
- Condition
- Constraint / Result
- Exceptions
- Rationale or Source, when useful

## Role

A business responsibility or actor classification relevant to permissions or use cases.

Recommended outline:
- Purpose
- Responsibilities
- Permissions / Constraints
- Related Capabilities
- Related Use Cases
