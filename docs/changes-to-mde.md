# Changes to MDE

## Purpose

This document records the MDE meta-model and modeling changes agreed during the Industry Patterns discussion and the comparison with TM Forum SID and BIAN.

The intent is to keep the MDE model small and clear while adopting the strongest structural ideas from those reference models.

## 1. Add ABE as a first-class concept

Add **Aggregate Business Entity (ABE)** to the MDE requirements meta-model.

An ABE is a primary reusable semantic unit between Capability and Entity.

```text
Domain
  ↓
Capability
  ↓
ABE
  ↓
Entity
```

An ABE groups a cohesive set of related entities around one primary business concept.

### Rules

- An ABE is first-class in the modeling language.
- An ABE belongs under a Capability in the requirements structure.
- An ABE is its named folder plus its Primary Entity's spec. It has no file of its own, and no additional `abes/` folder is required.
- An ABE has one Primary Entity, and is named after it.
- The Primary Entity's spec also holds what belongs to the ABE as a whole: its purpose, the rules that span its entities, and its levels of detail (see section 11).
- An ABE may contain multiple levels of detail.
- The selected application model may use only the amount of detail required from the ABE.
- A separate Profile concept is not required.

If ABEs later need much knowledge of their own, the folder may gain a small `README.md` declaring `type: abe`, with no other change to the structure.

## 2. Primary Entity: the entity named after its ABE

The **Primary Entity** anchors the ABE. It is an ordinary Entity: no new concept type and no new syntax.

```text
ABE: Resource

Primary Entity:
  Resource

Supporting Entities:
  Availability
  Qualification
  Resource Type
  Resource Status
```

### Rules

- Every ABE has exactly one Primary Entity.
- The Primary Entity is the entity whose spec file is named after its ABE's folder (`resource/resource.md`). It is recognized by that rule alone.
- Its spec is `type: entity`, like every other entity, so everything that reads entities reads it unchanged.
- The Primary Entity is the natural entry point for the ABE.
- Supporting entities remain normal Entity concepts.

Example of a Primary Entity's spec, carrying the ABE-level content:

```markdown
---
type: entity
title: Resource
---

# Resource

## Purpose
A person or piece of equipment that can be scheduled.

## Attributes …
## Operations …

## Rules
- A resource with a confirmed assignment cannot be retired.

## Levels
- Standard: Qualification
- Enterprise: Resource Type, Resource Status
```

## 3. Keep the requirements tree simple

The settled repository structure is:

```text
requirements/
  capabilities/
    scheduling/
      demand/
        demand.md
        demand-requirement.md

      resource/
        resource.md
        availability.md
        qualification.md

      assignment/
        assignment.md
        reservation.md
```

Meaning:

```text
Capability folder
  contains ABE folders

ABE folder
  is named for its Primary Entity

Primary Entity
  the spec named after the folder; also the ABE's spec

Other files
  are supporting Entities
```

Do not add extra structural folders such as:

```text
abes/
profiles/
overview/
```

unless a future concrete requirement justifies them.

The Workbench will make the semantic types visually clear through icons.

## 4. Add Workbench icons for semantic node types

The Workbench tree should display a distinct icon for every semantic node type, derived from the structure:

```text
Capability       a folder under capabilities/
ABE              a folder under a capability
Primary Entity   the entity spec named after its ABE's folder
Entity           any other entity spec
```

The filesystem remains minimal while the Workbench exposes the semantic meaning of each node.

## 5. Strengthen relationship semantics

Enhance Entity relationship definitions.

Relationships should no longer be represented only by a target and prose cardinality.

A relationship should carry explicit business semantics.

### Relationship properties

```text
Relationship
  Source
  Target
  Role
  Cardinality
  Kind
  Cascade
  Description
```

### Role

The relationship should state its business meaning.

Examples:

```text
has availability
has qualification
located at
assigned to
belongs to
```

### Cardinality

Use explicit cardinality.

Examples:

```text
1
0..1
0..*
1..*
```

### Kind

Keep the vocabulary small.

```text
association
composition
reference
```

The Kind also states the target's lifecycle, so no separate Lifecycle property is needed:

- **composition**: the target belongs to the source and has no life of its own (dependent).
- **reference** and **association**: the target has its own lifecycle (independent).

Specialization is not a relationship Kind; it is expressed on the Entity (section 6).

### Cascade

Cascade rules describe **business propagation of a change**, not database foreign-key behavior. They are relationship behavior, separate from the `hierarchy` aspect.

Cascade applies to two actions:

```text
update
delete
```

Behaviors:

```text
cascade
restrict
detach
none
```

Example:

```text
Resource → Availability

Role: has availability
Cardinality: 0..*
Kind: composition

Cascade:
  delete: cascade
```

Example of an independent reference:

```text
Resource → Location

Role: located at
Cardinality: 0..1
Kind: reference

Cascade:
  delete: restrict
```

## 6. Strengthen Entity specialization semantics

Make abstraction and specialization explicit in Entity modeling.

MDE should be able to express concepts such as:

```text
Resource
  abstract

Person Resource
  specializes Resource

Equipment Resource
  specializes Resource
```

This should be part of Entity semantics rather than a new top-level concept type.

Possible semantics:

```text
abstract: true
extends: Resource
```

Exact DSL syntax can be decided during implementation.

## 7. Module: not adopted for now

A Module, as an implementation and ownership unit, is not added to the Architecture meta-model for now. The Architecture's existing capability slices remain the ownership boundary.

## 8. Logical Interface (open)

An **Interface** as a logical contract, above its technical realization, remains under discussion now that Module is not adopted.

```text
Interface
  exposes Concept References[]
  Operations[]
  Events[]
  Contracts[]
```

It could stand between capabilities, or between the application and an external Integration that provides the same Interface. Whether to adopt it, and whether to add an Event Contract with it, is still to be decided.

## 9. Relate Interface to existing design concepts

If Interface is adopted, it does not replace API Contract or Integration:

```text
Interface
  ↓ realized by
API Contract
Event Contract
Integration
```

This separates logical dependency from technical realization.

## 10. Capability uses ABEs

Capability remains the expression of business ability.

A Capability may use one or more ABEs.

```text
Capability
  uses ABE[]
```

The Capability does not own every concept it uses.

ABEs should have one primary home, while other capabilities may reference or use them where necessary.

## 11. Allow variable detail inside an ABE

Do not introduce a separate Capability Profile or ABE Profile concept.

An ABE itself may contain increasing levels of semantic detail, recorded in its Primary Entity's `## Levels`. The levels use the Industry Patterns variants: **Simple**, **Standard**, and **Enterprise**.

Example:

```text
ABE: Inventory

Simple
  Item
  Location
  Quantity

Standard / Enterprise
  Inventory Unit
  Movement
  Reservation
  Lot / Batch
  Serial Tracking
  Inspection
  Traceability
  Work Order Consumption
```

Strategy selects the amount of ABE detail appropriate to the application.

This keeps the model simple:

```text
Capability
  ↓
ABE
  ↓
Required Entity Detail
```

## 12. Keep Pattern outside the core application meta-model for now

Industry Patterns remain reusable reference and composition assets.

Do not add a new application-level `Pattern` concept type yet.

Patterns may identify:

- Capabilities;
- ABEs;
- Entities;
- Relationships;
- Rules;
- Interfaces.

Strategy can recognize and apply patterns without requiring Pattern to become another application modeling layer.

## 13. Use SID and BIAN as reference models, not source models

The Reference Model Importer and Analyzer should compare external model structures with MDE.

SID and BIAN are initial reference targets.

The purpose is to identify:

- missing concepts;
- richer relationship semantics;
- reusable ABE structures;
- interface patterns;
- useful specialization structures.

External models should inform MDE but should not automatically modify it.

## Proposed resulting MDE structure

### Requirements

```text
Domain
Capability
ABE              (folder + Primary Entity)
Entity           (the Primary Entity is one)
Use Case
Workflow
Business Rule
Role
Business Event
Glossary
```

### Architecture

```text
Architecture
Interface        (open)
```

### Design

```text
Page
API Contract
Integration
Data Model
```

## Summary of planned changes

1. Add ABE: a folder under its Capability, plus its Primary Entity's spec.
2. Primary Entity: the entity spec named after its ABE's folder; an ordinary `type: entity`, no new type.
3. Keep ABE represented by its named folder under Capability.
4. Add distinct Workbench icons for Capability, ABE, and Primary Entity, derived from the structure.
5. Strengthen relationship semantics: Role, Cardinality, Kind, Cascade, Description.
6. Kind (association, composition, reference) also states the target's lifecycle; Cascade applies to update and delete.
7. Strengthen Entity abstraction and specialization (`abstract`, `extends`).
8. Module: not adopted for now.
9. Logical Interface: open.
10. Let Capability use ABEs.
11. Let ABE carry variable levels of detail (Simple, Standard, Enterprise) without introducing Profile.
12. Keep Pattern outside the core application meta-model for now.
13. Use SID and BIAN as reference sources through the importer/analyzer.

## Still to plan

- **Migration.** Moving entities from `requirements/entities/` into capability and ABE folders changes where the runtime reads entities, every link to an entity, and existing applications, which `mde update-app` must move.
- **Use cases and the capability's own spec** within the new tree: where `use-cases/` and the capability's overview file sit.
- **Specialization in Design and diagrams:** how a specialization is persisted, and how the logical data model draws it.
