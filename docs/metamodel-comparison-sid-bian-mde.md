# Meta-Model Comparison: MDE, TM Forum SID, and BIAN

## Purpose

Before importing or comparing the business content of SID and BIAN, compare the modeling languages themselves.

The question is:

> What structural concepts do SID and BIAN use that MDE currently lacks or represents only implicitly?

This comparison focuses on meta-model concepts, not telecom or banking business content.

## Current MDE meta-model baseline

The current MDE requirements meta-model includes:

- Domain
- Capability
- Entity
- Use Case
- Workflow
- Business Rule
- Role
- Business Event
- Glossary

Design adds:

- Page
- API Contract
- Integration
- Data Model

Architecture currently records durable structural decisions and diagrams but does not define a first-class Module or logical Interface concept.

## Structural comparison

| Concern | SID | BIAN | Current MDE | Assessment |
|---|---|---|---|---|
| Broad semantic area | Domain | Business Area / Business Domain | Domain | Covered |
| Mid-level semantic aggregate | **ABE** | Service Domain / business-information groupings play related but different roles | Missing | **Add ABE** |
| Detailed business concept | Business Entity | Business Object | Entity | Covered |
| Business ability | Adjacent TM Forum frameworks align capabilities/functions | Business Capability | Capability | Covered |
| Bounded implementation/function owner | ODA components/functions outside SID proper | **Service Domain** is an atomic functional capacity | Only generic Architecture | **Add Module** |
| Logical provided/required contract | Interfaces exist across ODA/frameworks | Service Operations / semantic interfaces | API Contract is design/external-consumer oriented | **Add logical Interface** |
| External realization | ODA/API ecosystem | Semantic APIs / external implementation possible | Integration | Covered, but should bind to Interface |
| Process / scenario | eTOM adjacent to SID | Business Scenario | Use Case / Workflow | Covered |
| Rule / policy | Policy/rule model | Conditions and modeled behavior | Business Rule | Covered |
| Event | Event concepts | Event-driven model / Service Domain Event | Business Event | Covered |
| State/lifecycle | Entity status/state patterns | Control Record state machines | Entity states/transitions | Covered |
| Roles | Party/business roles | Roles/capabilities | Role | Covered |
| Specialization | UML generalization; abstract Pattern ABEs/BEs | Specialization in metamodel | Only implicit in Entity relationships | **Strengthen** |
| Aggregate containment | Domain → ABE → ABE/BE | Business structures and Control Record decomposition | Capability currently lists Entities | **ABE should own this layer** |
| Relationship semantics | UML associations, cardinality, aggregation/generalization | UML relationships | Relationship prose in Entity | **Strengthen relationship structure** |
| Pattern abstraction | Patterns domain contains abstract ABEs/BEs requiring specialization | Functional Patterns + Generic Artifacts | Industry Pattern reference only | Useful, but no new application meta-type yet |
| Specification vs instance | EntitySpec/Entity and CharacteristicSpec/value patterns | Business Object vs contextual Control Record information | Entity spec vs runtime instance is implicit | Covered conceptually; may need clearer declaration |
| Provenance/reference source | Model documentation/versioning | Model artifact provenance | Industry Pattern reference in Domain | Strengthen importer provenance, not necessarily meta-model |

## SID observations

SID's information model uses Domains to organize semantic areas. Within a Domain, **Aggregate Business Entities (ABEs)** provide an explicit middle level. An ABE may contain Business Entities or other ABEs. Business Entities have attributes and relationships and are modeled in UML.

SID also has a Patterns domain containing abstract ABEs and Business Entities that require specialization before use.

Important ideas for MDE:

1. Domain → ABE → Entity is explicit.
2. ABE is a first-class modeling construct.
3. ABEs may nest.
4. Relationships have formal UML semantics rather than only prose.
5. Abstract concepts and specialization are explicit.
6. Generic patterns can be reused across domains.

## BIAN observations

BIAN organizes business behavior differently from SID.

Important meta-model concepts include:

- Business Area
- Business Domain
- Business Capability
- Service Domain
- Functional Pattern
- Control Record
- Business Object
- Behavior Qualifier
- Service Operation
- Business Scenario
- Semantic API

A Service Domain is intended to be an elemental functional capacity with clear ownership of its business information and explicit services to other domains.

Important ideas for MDE:

1. A functional boundary should have explicit ownership.
2. Bounded units communicate through explicit service operations.
3. The internal information model should not leak across boundaries.
4. Behavior can be standardized without prescribing an end-to-end workflow.
5. Semantic operations can later be technically realized as APIs.
6. Business capability and implementation/function boundary are not the same concept.

## Recommended MDE changes

### 1. Add ABE — high confidence

ABE is the clearest missing requirements modeling concept.

Proposed definition:

> **Aggregate Business Entity (ABE): a first-class semantic aggregate containing a cohesive set of related business concepts at a level between Domain and Entity.**

Proposed hierarchy:

```text
Domain
  contains ABE[]

ABE
  contains ABE[]
  contains Entity[]
```

An ABE may contain multiple levels of detail. Strategy selects only the detail required by the application.

ABE should be useful in ordinary application modeling, not only in the Industry Patterns repository.

### 2. Add Module — high confidence

The current MDE Architecture concept can describe module decisions, but there is no first-class object representing a bounded implementation owner.

Proposed definition:

> **Module: a bounded realization and ownership unit that implements application concepts and provides or requires explicit interfaces.**

Conceptually:

```text
Module
  owns Entity[]
  provides Interface[]
  requires Interface[]
```

A Module is architectural, not a business requirement.

It should not be confused with ABE:

- ABE organizes business meaning.
- Module organizes implementation ownership.

### 3. Add logical Interface — high confidence

Current `API Contract` is a design artifact describing an exposed system operation. This is too technical and too late to express the module boundary we have been discussing.

Proposed definition:

> **Interface: a logical contract through which a Module or Integration exposes concepts, operations, events, and guarantees to another Module.**

```text
Interface
  exposes Concept References[]
  operations[]
  events[]
  contracts[]
```

An API Contract can later realize an Interface.

```text
Interface
    ↓ realized by
API Contract / Event Contract / Integration
```

This allows an internal Module and a third-party Integration to satisfy the same required Interface.

### 4. Strengthen Entity relationship semantics — medium/high confidence

MDE currently describes relationships largely through linked bullets and prose cardinality.

SID and BIAN both rely on more formal relationship semantics.

Without creating a new first-class Relationship concept yet, the Entity relationship DSL should support at least:

- target entity;
- cardinality;
- role/name;
- direction;
- ownership/composition where meaningful;
- specialization/generalization;
- optional effective dating.

This is particularly important for imported reference models and cross-ABE analysis.

### 5. Make specialization explicit — medium confidence

SID relies heavily on abstract model elements and specialization. BIAN also uses specialization in its metamodel.

MDE should be able to express:

```text
Entity: Resource
abstract: true

Entity: Person Resource
extends: Resource
```

or equivalent semantics.

This does not require an additional concept type; it can be part of Entity semantics.

### 6. Keep Pattern outside the core application meta-model for now

SID has a first-class Patterns domain and BIAN has Functional Patterns.

MDE already has the separate Industry Patterns repository and Strategy can recognize and apply patterns.

For now, a new application-level `Pattern` concept type would add complexity without a demonstrated need.

Pattern provenance should remain recorded on Domain/ABE/model artifacts.

## Concepts that should NOT be copied directly

Several SID/BIAN concepts are valuable but are specific to their modeling style and do not justify new MDE meta-types yet.

### SID EntitySpec / CharacteristicSpec

These provide powerful dynamic typing and characteristic patterns.

MDE already distinguishes entity definitions from runtime instances. Dynamic characteristic behavior can be modeled later if a concrete application needs it.

### BIAN Control Record

Control Record is central to BIAN's Service Domain pattern, but MDE already has Entity, ABE, Module, state, and operations. Adopting Control Record would impose BIAN's functional architecture unnecessarily.

### BIAN Behavior Qualifier

Behavior Qualifiers refine a Service Domain's Control Record and operations. MDE can express comparable detail through Entity operations, ABE detail, Business Rules, and Interface operations.

### BIAN Functional Pattern / Action Term

BIAN's standardized behavior taxonomy is useful reference material, but MDE should not require every capability/module to conform to BIAN's finite banking-oriented behavior grammar.

It may later inspire an operation vocabulary or analyzer rule.

## Proposed minimal MDE meta-model after comparison

Keep the change small.

### Requirements

```text
Domain
  ↓
ABE
  ↓
Entity

Capability
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

### Key cross-layer relationships

```text
Capability
  uses → ABE

ABE
  contains → Entity

Module
  implements/owns → ABE / Entity

Module
  provides/requires → Interface

Integration
  may provide → Interface

API Contract
  realizes → Interface
```

## Main conclusion

The comparison does not suggest that MDE needs a large number of new concepts.

It suggests **three strong additions**:

1. **ABE** — semantic aggregation between Domain and Entity.
2. **Module** — bounded realization and ownership.
3. **Interface** — logical contract between Modules or Integrations.

Two existing areas should be strengthened rather than expanded with new types:

4. Entity relationship semantics.
5. Entity specialization / abstraction.

Most other SID and BIAN meta-model constructs can be mapped onto existing MDE concepts or retained as source-specific ideas for the reference-model analyzer.

This keeps the MDE meta-model small while absorbing the strongest structural lessons from both frameworks.
