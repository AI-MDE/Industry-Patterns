# Industry Model Architecture

## Purpose

This document defines how MDE should organize, select, compose, and realize reusable industry models.

The objective is to avoid two bad extremes:

- one universal application model containing every possible concept; and
- many disconnected fragments that duplicate concepts and are difficult to compose.

The preferred approach is a coherent canonical semantic model, organized into domains and Aggregate Business Entities (ABEs), from which application-specific models are selected and composed according to required capabilities and the level of ABE detail needed by the application.

## Core principle

**Keep one coherent semantic universe, but do not force one model depth or one implementation on every application.**

The canonical model defines meaning. Applications select only the semantic breadth and depth they require.

```text
Canonical Semantic Model
        ↓
      Domain
        ↓
       ABE
        ↓
   Entity / Concept
```

Selection and realization occur through a separate chain:

```text
Business Need
    ↓
Capability
    ↓
Relevant ABEs
    ↓
Required ABE Detail
    ↓
Architecture Decision
    ↓
Module or Integration
    ↓
Interface
    ↓
Application Model
```

These two views complement each other:

- **Domain / ABE / Entity** structures business meaning.
- **Capability / ABE / Module / Interface** structures selection and realization.

## 1. Canonical semantic model

The canonical model is the broad business semantic backbone.

It provides stable definitions and relationships for concepts such as:

- Party and Role;
- Product and Service;
- Resource;
- Classification;
- Agreement;
- Request;
- Work;
- Scheduling;
- Assignment;
- Asset;
- Inventory;
- Measurement;
- Payment.

The canonical model is not copied wholesale into every application.

Its job is to answer:

> What does this business concept mean, and how does it relate to other concepts?

It should minimize semantic duplication and provide a common vocabulary across industry and application patterns.

## 2. Domain

A Domain is a broad coherent semantic area within the canonical model.

Examples:

- Party;
- Customer Relationship;
- Resource Management;
- Scheduling;
- Inventory;
- Service Management;
- Asset Management;
- Finance.

A Domain is not necessarily an implementation boundary.

Its primary purpose is organization and semantic coherence.

## 3. Aggregate Business Entity (ABE)

An **Aggregate Business Entity (ABE)** is a primary first-class modeling concept in the Industry Patterns model. It is the principal reusable semantic unit between a Domain and individual entities.

An ABE groups business concepts that belong together semantically and are commonly understood, selected, specialized, and composed together. Industry models should be organized primarily around ABEs rather than around flat lists of entities.

Example:

```text
Domain: Resource Management

ABE: Resource
  Resource
  Resource Type
  Resource Status
  Resource Location

ABE: Capability
  Capability
  Qualification
  Certification

ABE: Availability
  Availability
  Schedule
  Shift
  Absence
  Capacity

ABE: Assignment
  Assignment
  Reservation
  Allocation
```

The ABE is useful because AI and human modelers should not have to reason at the level of hundreds of individual entities when selecting an application model.

### ABE detail

An ABE may define multiple named levels of detail without introducing a separate Profile concept. These levels are part of the ABE itself and allow the same ABE to serve simple, standard, advanced, or specialized application needs.

For example:

```text
ABE: Inventory

Level 1 — Core
  Item
  Location
  Quantity

Level 2 — Operational
  + Inventory Unit
  + Movement
  + Reservation
  + Assignment

Level 3 — Advanced
  + Lot / Batch
  + Serial Tracking
  + Warehouse / Bin
  + Inspection

Level 4 — Specialized
  + Traceability
  + Work Order Consumption
```

A simple consulting application may use only the core portion. A manufacturing or regulated application may use much more of the same ABE.

The selected ABE level of detail is an application-selection decision, not a separate first-class modeling concept. Levels may be cumulative or specialized branches when the business semantics require it.

### ABE principle

> **ABE is the primary reusable semantic unit for organizing, selecting, composing, and navigating industry models, and it may expose multiple levels of semantic detail.**

An ABE is not automatically a capability and is not automatically an implementation module. It is first-class in the modeling language and Industry Patterns catalog, even though it does not need to become a runtime business entity.

## 4. Entity / Concept

An Entity or Concept is the detailed business concept inside an ABE.

Examples:

- Resource;
- Capability;
- Certification;
- Availability;
- Demand;
- Assignment;
- Service Request;
- Maintenance Plan.

Entities own the detailed attributes, relationships, operations, states, and rules required by the application model.

Every concept should have one clear semantic definition in the canonical model, even when different applications select different subsets or extensions.

## 5. Capability

A Capability describes **what the business or application must be able to do**.

Examples:

- Manage Customer Relationships;
- Schedule Services;
- Manage Inventory;
- Maintain Equipment;
- Process Payments;
- Manage Recurring Services.

Capability is intentionally independent of implementation.

A capability may be realized by:

- an internal application module;
- an external third-party system;
- an enterprise platform;
- an integration;
- or, in some cases, a manual process.

### Capability principle

> **Capability expresses required business ability, not model structure or implementation ownership.**

## 6. Capability and ABE selection

A Capability describes what the business or application must be able to do. It may require one or several ABEs.

The capability does not introduce another modeling layer between itself and the ABEs.

```text
Capability
    ↓ uses
ABE[]
    ↓ selects required detail
Entity[] + Rules + Relationships
```

Different applications may use different amounts of detail from the same ABE.

### Inventory example

```text
Capability: Manage Inventory
    ↓
ABE: Inventory
```

A consulting company may select only:

```text
Item
Inventory Unit
Location
Status
Assignment
```

An aircraft manufacturer may select additional detail from the same ABE:

```text
Part
Revision
Lot / Batch
Serial Number
Warehouse / Bin
Reservation
Allocation
Material Requirement
Inspection
Quarantine
Traceability
Certificate
Work Order Consumption
Substitution
```

### CRM example

```text
Capability: Manage Customer Relationships
    ↓
ABE: Customer Relationship
```

A simple service application may require:

```text
Party
Organization
Contact
Interaction
Preference
Follow-up
```

A sales-oriented application may additionally require:

```text
Lead
Opportunity
Sales Stage
Activity
Quote
Forecast
```

The ABE remains the stable reusable modeling unit; Strategy selects the amount of detail needed by the application.

### Selection principle

> **Capability tells us which business area is needed. ABE tells us the reusable semantic unit. Strategy selects the required detail from the ABE.**

## 7. Module

A Module is an implementation and ownership boundary.

It is not the same thing as a Capability or ABE.

A Module may own concepts from one or several ABEs and may realize one or several capabilities.

```text
Module
  owns Concept[]
  provides Interface[]
  requires Interface[]
```

Example:

```text
Scheduling Module

owns:
  Demand
  Assignment
  Schedule

requires:
  Resource Availability Interface
  Client Reference Interface

provides:
  Scheduling Interface
```

### Module principle

> **Module explains who owns and realizes part of the application model.**

Modules may depend on other modules, but dependencies should be explicit and interface-based.

## 8. Interface

Modules should not directly depend on the internal model of another module.

They depend on published interfaces.

```text
Module A
    ↓ requires
Interface
    ↑ provides
Module B or External Integration
```

An interface may expose:

```text
Interface
  Concept References[]
  Operations[]
  Events[]
  Contracts[]
```

Example:

```text
Interface: Resource Availability

Concept References:
  ResourceRef
  CapabilityRef
  LocationRef
  AvailabilityWindow

Operations:
  findEligibleResources(requirements)
  getAvailability(resourceRef, period)
  reserveCapacity(...)
  releaseCapacity(...)

Contracts:
  returned resources satisfy declared hard requirements
  reservations are bounded by available capacity
```

The consuming module should not care whether the provider is:

- an internal Resource Management module;
- an external workforce system;
- an ERP;
- a third-party scheduling service.

### Interface principle

> **Modules depend on interfaces, not on each other's internal entities.**

## 9. Concept ownership

Every detailed concept should have one primary owning module when implemented.

Other modules may reference that concept through a published interface.

For example:

```text
Resource Management Module
  owns:
    Resource
    Capability
    Availability

Scheduling Module
  owns:
    Demand
    Assignment
    Schedule
```

Scheduling may logically relate Assignment to Resource, but it should consume a Resource reference through the Resource interface rather than own or duplicate the Resource model.

### Ownership rule

> **An entity has one primary implementation owner. Cross-module relationships use published references and contracts.**

## 10. Internal module versus external integration

A required capability does not imply that the application should implement that capability internally.

Architecture chooses how each capability is realized.

```text
Capability
    ↓
Implementation Decision
    ├── Internal Module
    ├── External Integration
    ├── Existing Enterprise Service
    └── Manual / External Process
```

Example:

```text
Capability: Schedule Service
  → Internal Scheduling Module

Capability: Payments
  → External Payment Provider

Capability: Accounting
  → External Accounting Platform

Capability: Messaging
  → External Messaging Service
```

When a capability is external, the application usually needs only the boundary model and integration contract, not the provider's full internal domain model.

### Architecture principle

> **A capability required by the application does not imply that its full domain model belongs in the application.**

## 11. Strategy versus Architecture

Strategy and Architecture have different responsibilities.

### Strategy

Strategy identifies:

- the business goal;
- required capabilities;
- applicable ABEs and patterns;
- the required level of semantic and verification rigor.

```text
Business Goal
    ↓
Required Capabilities
    ↓
Relevant ABEs / Patterns
    ↓
Required ABE Detail
```

Strategy should not select individual entities prematurely.

### Architecture

Architecture determines how required capabilities are realized:

- internal module;
- external integration;
- existing platform;
- provider/interface binding;
- technology and deployment decisions.

```text
Required Capability
    ↓
Architecture
    ↓
Module or Integration
    ↓
Interface Binding
```

### Separation principle

> **Strategy decides what capabilities, ABEs, and ABE detail are needed. Architecture decides how those capabilities are realized and connected.**

## 12. Composition model

The preferred MDE composition model is neither:

```text
One giant model
  → delete everything not needed
```

nor:

```text
Independent mini-models
  → glue them together afterward
```

Instead:

```text
Canonical Semantic Model
        ↓
Domains
        ↓
ABEs
        ↓
Capability-Based Selection
        ↓
Required ABE Detail
        ↓
Application Semantic Projection
        ↓
Architecture Realization
        ↓
Modules + Integrations
        ↓
Interfaces
```

### Composition principle

> **Fragment the model for use, not for meaning.**

There should be one canonical meaning for a concept, while different applications select different ABEs, different levels of ABE detail, and different implementations.

## 13. Pattern packages

Reusable modeling patterns may package related ABEs and rules for recognition and composition.

Examples:

- Recurring Service;
- Constraint-Based Scheduling;
- Case Management;
- Approval;
- Inventory;
- Customer Relationship;
- Maintenance;
- Assignment.

Pattern packages are semantic composition aids. They do not necessarily become implementation modules one-for-one.

A Scheduling pattern may select Demand, Availability, Requirement, Resource Reference, Constraint, and Assignment concepts. A Scheduling Module may then implement some of those concepts and consume others through interfaces.

## 14. AI role

This architecture is designed for AI-assisted model composition.

AI should reason progressively:

```text
Understand business description
        ↓
Recognize business goals
        ↓
Identify required capabilities
        ↓
Select relevant domains / ABEs / patterns
        ↓
Bind to existing business concepts
        ↓
Identify missing semantics
        ↓
Propose architecture realization
        ↓
Bind required interfaces to providers
        ↓
Produce application-specific model
```

AI should avoid:

- copying an entire canonical model into every application;
- inventing duplicate concepts when an existing canonical concept already fits;
- assuming every capability must be implemented internally;
- selecting unnecessary ABE detail for simple businesses;
- selecting insufficient ABE detail for regulated or complex businesses;
- coupling modules through each other's internal entities.

## 15. Why ABE matters

ABE is the critical middle layer because it gives model composition a useful granularity.

Without ABE:

```text
Domain
  ↓
hundreds of Entities
```

is too coarse at the top and too detailed at the bottom.

With ABE:

```text
Domain
  ↓
ABE
  ↓
Entity
```

AI can reason about cohesive semantic clusters before expanding them into detailed entities.

This allows Strategy to work at the ABE level before expanding into detailed entities:

```text
Capability
      ↓ selects
ABE[]
      ↓ chooses required detail
Entity[] + Rules + Relationships
```

## 16. Summary

The recommended MDE industry-model architecture is:

```text
DOMAIN
  broad semantic area

    ↓

ABE
  cohesive semantic cluster

    ↓

ENTITY / CONCEPT
  detailed business meaning


CAPABILITY
  required business ability

    ↓ uses

ABE
  primary reusable semantic unit
  with application-selected detail

    ↓ realized through

MODULE or INTEGRATION
  bounded realization / ownership

    ↓

INTERFACE
  explicit contract between realizations
```

The central rules are:

1. Maintain one coherent canonical semantic model.
2. Organize it into Domains and ABEs.
3. Treat ABE as the primary reusable modeling concept between Domain and Entity.
4. Use capabilities to express what the application needs and which ABEs are relevant.
5. Let Strategy select only the required detail from each ABE rather than introducing a separate Profile layer.
6. Treat modules as bounded implementation and ownership units.
7. Allow capabilities to be realized internally or externally.
8. Make dependencies explicit through provided and required interfaces.
9. Give every implemented entity one primary owner.
10. Let Strategy determine capabilities, ABEs, required ABE detail, and semantic rigor.
11. Let Architecture determine realization and interface bindings.
12. Use AI to recognize, select, compose, specialize, and validate the application model.

The result is a system that preserves the consistency of a canonical model while producing application models that remain small, relevant, modular, replaceable, and appropriate to the actual business.


## Reference-model analysis

MDE may learn from mature external reference models without adopting their industry scope or copying their source artifacts.

The [Reference Model Importer and Analyzer](reference-model-importer.md) provides a source-neutral pipeline for:

- importing authorized reference-model files through adapters;
- normalizing Domains, ABEs, Entities, Capabilities, and Interfaces;
- comparing them with existing MDE Industry Patterns;
- identifying matches, specializations, extensions, candidate ABEs, and gaps;
- preserving source provenance for review.

SID and BIAN are the initial reference targets. The same mechanism can later support FHIR, ACORD, GS1, and other models.

The analyzer informs the canonical model; it does not automatically modify it.
