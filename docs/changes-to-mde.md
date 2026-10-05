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
- An ABE is represented by its named folder; no additional `abes/` folder is required.
- An ABE has one Primary Entity.
- The ABE is named after its Primary Entity.
- An ABE may contain multiple levels of detail.
- The selected application model may use only the amount of detail required from the ABE.
- A separate Profile concept is not required.

## 2. Add Primary Entity as an Entity specialization

Add **Primary Entity** as a specialized Entity concept type.

The Primary Entity anchors the ABE.

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
- The Primary Entity is still an Entity semantically.
- The Primary Entity is the natural entry point for the ABE.
- The Workbench should give Primary Entity its own icon.
- Supporting entities remain normal Entity concepts.

A possible representation is:

```yaml
type: primary-entity
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
  appears as the main entity in the ABE

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

The Workbench tree should display a distinct icon for every semantic node type.

At minimum:

```text
Capability
ABE
Primary Entity
Entity
```

The filesystem remains minimal while the Workbench exposes the semantic meaning of each node.

## 5. Strengthen relationship semantics

Enhance Entity relationship definitions.

Relationships should no longer be represented only by a target and prose cardinality.

A relationship should carry explicit business semantics.

### Proposed relationship properties

```text
Relationship
  Source
  Target
  Role
  Cardinality
  Kind
  Lifecycle
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

Initial kinds:

```text
association
composition
reference
specialization
```

### Lifecycle

State whether the target has an independent lifecycle.

Initial values:

```text
independent
dependent
```

### Cascade

Cascade rules describe **business lifecycle propagation**, not database foreign-key behavior.

Initial cascade behaviors:

```text
cascade
restrict
detach
none
```

Cascade may apply to lifecycle actions such as:

```text
create
update
delete
archive
```

Example:

```text
Resource → Availability

Role: has availability
Cardinality: 0..*
Kind: composition
Lifecycle: dependent

Cascade:
  delete: cascade
  archive: cascade
```

Example of an independent reference:

```text
Resource → Location

Role: located at
Cardinality: 0..1
Kind: reference
Lifecycle: independent

Cascade:
  delete: restrict
  archive: none
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

## 7. Add Module as an Architecture concept

Add **Module** to the architecture meta-model.

A Module is a bounded implementation and ownership unit.

```text
Module
  owns Entity[]
  provides Interface[]
  requires Interface[]
```

A Module is not the same as:

- Capability — business ability;
- ABE — semantic grouping.

The distinction is:

```text
Capability
  explains what is needed

ABE
  organizes the business meaning

Module
  explains who owns and realizes it
```

## 8. Add logical Interface as an Architecture concept

Add **Interface** as a logical architecture contract.

An Interface sits above technical API realization.

```text
Interface
  exposes Concept References[]
  Operations[]
  Events[]
  Contracts[]
```

Modules should depend on Interfaces rather than another Module's internal entities.

```text
Module A
  requires
    ↓
Interface
    ↑
  provides
Module B
```

An external Integration may also provide the same Interface.

## 9. Relate Interface to existing design concepts

Do not replace API Contract or Integration.

Instead:

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

An ABE itself may contain increasing levels of semantic detail.

Example:

```text
ABE: Inventory

Core
  Item
  Location
  Quantity

Additional detail
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
- Modules;
- Interfaces.

Strategy can recognize and apply patterns without requiring Pattern to become another application modeling layer.

## 13. Use SID and BIAN as reference models, not source models

The Reference Model Importer and Analyzer should compare external model structures with MDE.

SID and BIAN are initial reference targets.

The purpose is to identify:

- missing concepts;
- richer relationship semantics;
- reusable ABE structures;
- module boundaries;
- interface patterns;
- useful specialization structures.

External models should inform MDE but should not automatically modify it.

## Proposed resulting MDE structure

### Requirements

```text
Domain
Capability
ABE
Primary Entity
Entity
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
Module
Interface
```

### Design

```text
Page
API Contract
Integration
Data Model
```

## Summary of planned changes

1. Add ABE.
2. Add Primary Entity as an Entity specialization.
3. Keep ABE represented by its named folder under Capability.
4. Add distinct Workbench icons for ABE and Primary Entity.
5. Strengthen relationship semantics.
6. Add explicit cardinality, relationship kind, lifecycle, and cascade rules.
7. Strengthen Entity abstraction and specialization.
8. Add Module to Architecture.
9. Add logical Interface to Architecture.
10. Relate Interface to API Contract and Integration.
11. Let Capability use ABEs.
12. Let ABE carry variable levels of detail without introducing Profile.
13. Keep Pattern outside the core application meta-model for now.
14. Use SID and BIAN as reference sources through the importer/analyzer.
