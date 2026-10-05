# Industry Model Architecture

## Purpose

This document defines how MDE should organize, select, compose, and realize reusable industry models.

The objective is to avoid two bad extremes:

- one universal application model containing every possible concept; and
- many disconnected fragments that duplicate concepts and are difficult to compose.

The preferred approach is a coherent canonical semantic model, organized into domains and Aggregate Business Entities (ABEs), from which application-specific models are selected and composed according to required capabilities and capability profiles.

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
Capability Profile
    ↓
Relevant ABEs / Concepts
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
- **Capability / Profile / Module / Interface** structures selection and realization.

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

An **Aggregate Business Entity (ABE)** is the important middle layer between a Domain and individual entities.

An ABE groups business concepts that belong together semantically and are commonly understood or selected together.

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

### ABE principle

> **ABE structures the semantic model at a useful composition granularity.**

An ABE is not automatically a capability and is not automatically an implementation module.

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

## 6. Capability Profile

One model does not fit all applications that require the same capability.

A Capability Profile identifies the required semantic breadth, depth, rigor, and complexity for a particular application.

### Inventory example

```text
Capability: Manage Inventory

Profiles:
  Asset Custody
  Basic Stock
  Warehouse Inventory
  Manufacturing Inventory
  Regulated / Traceable Inventory
```

A consulting company may need only laptop custody:

```text
Item
Inventory Unit
Serial Number
Location
Status
Assignment
Receive
Assign
Return
Retire
```

An aircraft manufacturer may require:

```text
Part
Revision
Lot / Batch
Serial Number
Warehouse / Bin
Reservation
Allocation
Material Requirement
Receipt / Issue / Transfer
Inspection
Quarantine
Traceability
Supplier Lot
Certificate
Configuration
Work Order Consumption
Substitution
```

These are not merely different screen configurations. They represent materially different semantic depth.

### CRM example

```text
Capability: Manage Customer Relationships

Profiles:
  Contact Relationship
  Sales CRM
  Service Relationship
  Enterprise Account Management
```

A simple relationship profile may need:

```text
Party
Organization
Contact
Interaction
Note
Follow-up
```

A sales profile may add:

```text
Lead
Prospect
Opportunity
Sales Stage
Activity
Quote
Forecast
```

A service relationship profile may instead add:

```text
Service Request
Service History
Preference
Complaint
Satisfaction
Relationship Status
```

### Profile principle

> **Do not select a model by capability name alone. Select the capability profile appropriate to the business context.**

A profile can often be expressed as a selection and composition of ABEs plus additional profile-specific rules and concepts.

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
- relevant capability profiles;
- applicable patterns and ABEs;
- the required level of semantic and verification rigor.

```text
Business Goal
    ↓
Required Capabilities
    ↓
Capability Profiles
    ↓
Relevant ABEs / Patterns
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

> **Strategy decides what capabilities and model depth are needed. Architecture decides how those capabilities are realized and connected.**

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
Capability / Profile Selection
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

There should be one canonical meaning for a concept, while different applications select different ABEs, entities, profiles, and implementations.

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
Determine capability profiles
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
- selecting overly sophisticated profiles for simple businesses;
- selecting simplistic profiles for regulated or complex businesses;
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

This supports capability profiles particularly well:

```text
Capability Profile
      ↓ selects
ABE[]
      ↓ refines
Entity[] + Rules
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

    ↓

PROFILE
  required breadth / depth / rigor

    ↓

MODULE or INTEGRATION
  bounded realization / ownership

    ↓

INTERFACE
  explicit contract between realizations
```

The central rules are:

1. Maintain one coherent canonical semantic model.
2. Organize it into Domains and ABEs.
3. Use capabilities to express what the application needs.
4. Use capability profiles to select appropriate semantic depth.
5. Let profiles select and refine relevant ABEs rather than copying the entire model.
6. Treat modules as bounded implementation and ownership units.
7. Allow capabilities to be realized internally or externally.
8. Make dependencies explicit through provided and required interfaces.
9. Give every implemented entity one primary owner.
10. Let Strategy determine capabilities, profiles, and semantic rigor.
11. Let Architecture determine realization and interface bindings.
12. Use AI to recognize, select, compose, specialize, and validate the application model.

The result is a system that preserves the consistency of a canonical model while producing application models that remain small, relevant, modular, replaceable, and appropriate to the actual business.
