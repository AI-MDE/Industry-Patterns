# Recurring Service and Constraint-Based Scheduling Pattern

## Purpose

This pattern models businesses that repeatedly or on demand fulfill service needs by matching demand to constrained resources. It applies across health care, field service, equipment maintenance, inspections, home services, facilities, room reservations, transportation, and other service operations.

The stable abstraction is not an appointment calendar. It is a configurable resource-allocation model:

```text
Service Need / Request / Plan
        ↓
      Demand
        ↓
    Scheduling
        ↓
  Feasible Assignment
        ↓
   Service Event
        ↓
      Outcome
```

## Recognition signals

Consider this pattern when requirements include several of the following:

- services occur repeatedly on a cadence, according to a trigger, or on demand;
- demand must be matched against limited resource supply;
- a valid assignment depends on time, capability, location, capacity, equipment, team composition, or similar requirements;
- several resources must be available simultaneously;
- users care about backlog, bottlenecks, utilization, missed commitments, or future capacity;
- scheduling rules differ by organization or change over time;
- users need to configure new resource types, requirements, or scheduling policies without changing application code.

Examples include physical therapy visits, chiropractic treatment, lawn mowing, snow removal, equipment service calls, recurring maintenance, inspections, conference-room reservations, home care, and crane service.

## Core concepts

### Service

Canonical concept: [Service](../model/requirements/product-and-service/product/service.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Request

Canonical concept: [Service Request](../model/requirements/service-management/service-request/service-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Plan

Canonical concept: [Service Plan](../model/requirements/service-management/service-plan/service-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Demand

Canonical concept: [Demand](../model/requirements/scheduling/demand/demand.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Resource

Canonical concept: [Resource](../model/requirements/resource-management/resource/resource.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Requirement

Canonical concept: [Requirement](../model/requirements/scheduling/demand/requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Capability

Canonical concept: [Resource Capability](../model/requirements/resource-management/resource/resource-capability.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Availability

Canonical concept: [Availability](../model/requirements/resource-management/resource/availability.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Constraint

Canonical concept: [Constraint](../model/requirements/scheduling/demand/constraint.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Assignment

Canonical concept: [Assignment](../model/requirements/scheduling/assignment/assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Event

Canonical concept: [Service Event](../model/requirements/service-management/service-event/service-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Recurring service

Recurring Service is the demand-generation layer above Scheduling.

```text
Recurring Service Plan
        ↓ generates
      Demand[]
        ↓
    Scheduling
        ↓
    Assignment[]
```

Recurrence may be:

- calendar-based;
- quantity-based;
- condition-based;
- event-triggered.

A recurring plan should remain a governing object rather than disappearing after appointments are created. It may be paused, changed, extended, terminated, or reassessed.

Where continuity matters, a schedule may reserve future capacity through a recurring commitment rather than optimizing every occurrence independently.

## Scheduling as the umbrella pattern

Capability matching is not a separate peer to scheduling. It is one scheduling constraint alongside time, location, capacity, equipment, and team requirements.

The scheduling problem is:

```text
Demand
  +
Resource Supply
  +
Constraints
  ↓
Feasible Assignments
  ↓
Selection / Optimization
  ↓
Schedule
```

Availability and suitability are different dimensions:

- available + suitable -> candidate;
- available + unsuitable -> reject;
- suitable + unavailable -> reject for that period;
- valid + preferred -> stronger candidate.

## Dynamic configuration

The core product should not hard-code industry scheduling rules.

The stable runtime should understand only the generic concepts: Demand, Resource, Requirement, Constraint, Availability, Assignment, Service Event, and Recurrence.

Business configuration defines the changing semantics:

```text
Core Runtime
  Scheduling Engine
  Recurrence Engine
  Constraint Evaluation
  Resource Model
  Demand Model
          ↑
Business Configuration
  Resource Types
  Capabilities
  Demand Types
  Requirement Types
  Constraint Rules
  Scheduling Policies
  Preferences
  Scoring / Priorities
```

Examples of configuration-time rules:

- an initial physical therapy evaluation requires 60 minutes;
- shoulder rehabilitation requires an appropriately qualified therapist;
- a treatment may require both a room and a particular device;
- an annual crane inspection requires a certified inspector;
- no technician may exceed a configured daily workload;
- a boardroom request requires capacity for at least twelve people and video conferencing;
- preserve the same provider for a recurring series when possible.

Configuration should be versioned where rule changes can affect future or explain past assignments.

## AI configuration role

AI should primarily configure and evolve the explicit business model rather than act as an opaque scheduler.

A user may describe operations conversationally. AI translates that description into explicit configuration for review and execution.

Example:

> Patients usually attend twice a week. Sports injuries must use a qualified therapist. Some treatments require a private room. Keep the same therapist when possible.

AI may derive:

```text
Resource Types
  Therapist
  Treatment Room

Capabilities
  Sports Injury
  Shoulder Rehabilitation

Constraints
  Therapist must satisfy required capability
  Required room must be available
  All required resources must overlap for session duration

Preferences
  Prefer same therapist
  Prefer stable recurring time
```

The deterministic runtime executes the resulting configuration and should be able to explain why an Assignment was accepted, rejected, or preferred.

## Operational questions and dashboard guidance

A role's primary Page should not merely mirror entities. Its purpose is to expose the factors that determine success for that role.

For scheduling and service operations, useful critical-success perspectives include:

- **Flow:** backlog, aging work, urgent unscheduled demand;
- **Bottlenecks:** scarce capabilities, constrained locations, unavailable equipment, congested periods;
- **Capacity:** utilization, idle capacity, overload, future available capacity;
- **Commitments:** on-time fulfillment, missed visits, overdue maintenance, service-level exposure;
- **Schedule quality:** cancellations, rescheduling, continuity, travel inefficiency, instability;
- **Forward risk:** future demand versus supply, emerging capability shortages, recurring commitments that exceed capacity;
- **Economics:** revenue, margin, billable utilization, resource return, maintenance cost, downtime, cash-flow implications where relevant.

The conceptual design sequence is:

```text
Role
  ↓
Responsibilities / Goals
  ↓
Critical Success Factors
  ↓
Management Questions
  ↓
Measures / Signals
  ↓
Primary Page
```

A dashboard remains a Page, not a separate first-class concept. A Role may identify a Page as its application entry point.

## Prototype implementation guidance

For fast prototyping, keep the domain model and data independent of a production database.

Recommended shape:

```text
MDE Model Definition
        +
JSON Instance Data
        ↓
In-Memory Query Layer
        ↓
Generated SQL / Derived Views
        ↓
Prototype Pages
```

JSON can remain the prototype data source. A SQL engine such as DuckDB can query JSON directly, infer structure, or use column definitions generated from the MDE model. Physical database tables are not required for the prototype.

The MDE model remains the authoritative schema. Derived concepts such as backlog, utilization, bottleneck, capacity shortfall, schedule risk, and ROI should normally be calculated by queries or views rather than stored as primary entities.

This supports rapid AI-driven changes to the model, data, rules, and pages while preserving powerful analytical queries.

## Example bindings

### Physical therapy

```text
Service Plan       -> Plan of Care
Demand             -> Required Therapy Visit
Resource           -> Therapist / Room / Equipment
Capability         -> Specialty / Qualification
Assignment         -> Therapy Appointment
Service Event      -> Therapy Visit
Outcome            -> Functional Progress / Discharge
```

### Equipment service and maintenance

See the [Equipment Service and Field Service model pattern](../patterns/equipment-service.md) for the full industry specialization.

```text
Service Request    -> On-Demand Service Request
Service Plan       -> Maintenance / Inspection Plan
Demand             -> Service or Inspection Demand
Resource           -> Technician / Team / Vehicle / Equipment
Capability         -> Skill / Certification
Location           -> Client Site
Assignment         -> Service Assignment
Service Event      -> Service Visit / Inspection
Outcome            -> Repair / Maintenance / Inspection Result
```

### Room reservation

```text
Demand             -> Meeting / Event Need
Resource           -> Room
Capability         -> Capacity / Layout / AV / Accessibility
Availability       -> Reservable Time
Assignment         -> Reservation
```

## Invariants

1. Every Assignment must satisfy all hard constraints effective for that Demand.
2. Every allocated Resource must be available for the required interval and capacity.
3. Resource requirements that must act together must overlap for the entire required interval.
4. Capability and requirement definitions are effective-dated or versioned when their meaning changes over time.
5. Planned Assignment and actual Service Event remain distinct.
6. Recurring plans remain traceable to the Demand occurrences they generate.
7. The origin of Demand remains traceable even when all sources use the same scheduling engine.
8. The configuration version used to produce or validate a schedule should be explainable when rule evolution matters.
9. Derived operational measures retain lineage to authoritative operational data.
10. Industry-specific terminology specializes the pattern without changing these underlying semantics.

## AI recognition and application

When this pattern is recognized, AI should:

1. identify how Demand is created;
2. identify available Resource types;
3. discover scheduling constraints rather than assuming fixed ones;
4. separate hard constraints from preferences;
5. identify simultaneous resource bundles;
6. determine whether recurrence is calendar-, quantity-, condition-, or event-driven;
7. identify role-level critical success factors for primary operational Pages;
8. make business-specific rules explicit configuration;
9. reuse existing domain concepts before introducing new generic entities;
10. validate the model with representative scheduling scenarios.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Industry lifecycles, events, baseline rules, and variant choices continue to constrain the selected concepts.

| Source term | Canonical concept | ABE |
|---|---|---|
| Service | [Service](../model/requirements/product-and-service/product/service.md) | [Product](../model/requirements/product-and-service/product/README.md) |
| Service Request | [Service Request](../model/requirements/service-management/service-request/service-request.md) | [Service Request](../model/requirements/service-management/service-request/README.md) |
| Service Plan | [Service Plan](../model/requirements/service-management/service-plan/service-plan.md) | [Service Plan](../model/requirements/service-management/service-plan/README.md) |
| Demand | [Demand](../model/requirements/scheduling/demand/demand.md) | [Demand](../model/requirements/scheduling/demand/README.md) |
| Resource | [Resource](../model/requirements/resource-management/resource/resource.md) | [Resource](../model/requirements/resource-management/resource/README.md) |
| Requirement | [Requirement](../model/requirements/scheduling/demand/requirement.md) | [Demand](../model/requirements/scheduling/demand/README.md) |
| Capability | [Resource Capability](../model/requirements/resource-management/resource/resource-capability.md) | [Resource](../model/requirements/resource-management/resource/README.md) |
| Availability | [Availability](../model/requirements/resource-management/resource/availability.md) | [Resource](../model/requirements/resource-management/resource/README.md) |
| Constraint | [Constraint](../model/requirements/scheduling/demand/constraint.md) | [Demand](../model/requirements/scheduling/demand/README.md) |
| Assignment | [Assignment](../model/requirements/scheduling/assignment/assignment.md) | [Assignment](../model/requirements/scheduling/assignment/README.md) |
| Service Event | [Service Event](../model/requirements/service-management/service-event/service-event.md) | [Service Event](../model/requirements/service-management/service-event/README.md) |
