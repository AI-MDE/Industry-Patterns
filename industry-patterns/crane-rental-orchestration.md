# Industrial & Commercial Crane Rental Orchestration Model Pattern

## Classification

**Applied industry extension — outside the original industry subject list.**

This pattern specializes Cross-Industry Party, Role, Organization, Product, Asset, Equipment, Offering, Quote, Agreement, Order, Schedule, Work Effort, Location, Inspection, Measurement, Charge, Invoice, Payment, Event, Status, and Document concepts.

## Intent

Model organizations that rent mobile, tower, crawler, rough-terrain, all-terrain, carry-deck, boom-truck, and other lifting equipment; evaluate lift requirements; select appropriate equipment and configurations; quote and contract work; reserve fleet and qualified personnel; coordinate permits, transport, setup, inspection, lift execution, standby, teardown, return, maintenance, billing, and compliance evidence.

The term **orchestration** is intentional. A crane-rental engagement coordinates many independently governed resources and decisions: customer demand, job site, load, radius, capacity, configuration, ground conditions, lift plan, equipment availability, transport, operators, riggers, signal persons, permits, inspections, weather, execution, utilization, and commercial settlement.

This is a logical business and operations pattern, not an engineering calculation method, lift-planning standard, regulatory rule, or safety procedure. Implementations must use qualified professionals and the standards, manufacturer requirements, labor rules, permits, and laws applicable to each jurisdiction and lift.

## Business overview

**Customer Need → Lift Request → Site/Load Assessment → Equipment Selection → Quote → Contract → Lift Plan/Permits → Reservation → Dispatch → Delivery/Setup → Inspection → Lift Execution → Teardown/Return → Utilization/Billing → Maintenance**

A Customer submits a Lift Request describing the load, site, dates, access, reach, height, radius, duty, and service expectations. A rental organization evaluates the request, surveys the site where needed, determines risk and planning requirements, and proposes a Crane Configuration, accessories, transport, personnel, schedule, and commercial terms. An accepted Quote creates a Rental Agreement and Job Order.

The organization reserves compatible Equipment, attachments, transport units, Operators, Riggers, Signal Persons, Lift Directors, technicians, and permits. Before work begins, required Lift Plans, engineering reviews, ground assessments, traffic plans, permits, credentials, and pre-lift documents must be approved. Assets are dispatched, delivered, assembled or configured, inspected, and released for service. Operational events record setup, lifts, delays, weather holds, standby, breakdowns, substitutions, and completion. Teardown and return inspections determine damage, maintenance, and release back to the fleet. Time, utilization, transport, labor, accessories, fuel, permits, standby, overtime, damage, and other charge events feed invoicing and settlement.

## Pattern variants

### Simple

Use for bare rental of one equipment category or a dispatch prototype.

Core concepts: Customer; Job Site; Crane Asset; Rental Offering; Quote; Rental Agreement; Reservation; Dispatch; Delivery; Return; Usage Record; Invoice; Payment.

### Standard

Use as the default for operated crane rental and project-based lifting work.

Adds: Lift Request; Load Requirement; Site Survey; Ground Condition; Equipment Model; Crane Configuration; Attachment; Capacity Evidence; Job Order; Lift Plan; Permit; Personnel Qualification; Crew Assignment; Transport Movement; Setup; Inspection; Lift Activity; Weather Observation; Delay; Standby; Fuel; Damage Report; Maintenance Work Order; Charge Event.

### Enterprise

Use for multi-branch fleets, engineered lifts, tower-crane projects, long-duration rentals, multiple subcontractors, union labor, or regulated heavy-haul operations.

Adds: Legal Entity; Branch; Fleet Pool; Territory; Master Service Agreement; Customer Credit Profile; Rate Card; Project; Work Package; Critical Lift Review; Engineering Calculation; Rigging Plan; Traffic Management Plan; Route Survey; Oversize Permit; Escort Assignment; Assembly Component; Counterweight Set; Telematics Reading; Certification; Competency Record; Shift; Timesheet; Subcontract; Purchase Order; Incident Investigation; Utilization Forecast; Fleet Transfer; Depreciation Measure.

## Actors and roles

See [canonical actors and roles](behavior/crane-rental.md#actors-and-roles).

## Customer, project, and site concepts

### Customer Account

Canonical concept: [Customer Account](../model/subjects/party/customer-account/customer-account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Project

Canonical concept: [Project](../model/subjects/work/project/project.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Job Site

Canonical concept: [Site](../model/subjects/location/site/site.md) (as Job Site).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Site Access Constraint

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ground Condition

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Lift demand and assessment

### Lift Request

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Load Requirement

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Lift Condition

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Site Survey

Canonical concept: [Site Assessment](../model/subjects/location/site/site-assessment.md) (as Site Survey).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Lift Classification

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Equipment and configuration concepts

### Equipment Model

Canonical concept: [Equipment Model](../model/subjects/resource/equipment-model/equipment-model.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Crane Asset

Canonical concept: [Equipment](../model/subjects/resource/equipment-model/equipment.md) (as Crane Asset).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Equipment Component

Canonical concept: [Equipment Component](../model/subjects/resource/equipment-model/equipment-component.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Crane Configuration

Canonical concept: [Equipment Configuration](../model/subjects/resource/equipment-model/equipment-configuration.md) (as Crane Configuration).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Capacity Evidence

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Equipment Compatibility

Canonical concept: [Equipment Compatibility](../model/subjects/resource/equipment-model/equipment-compatibility.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Commercial offering, quote, and agreement

### Rental Offering

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rate Card

Canonical concept: [Price List](../model/subjects/product/offering/price-list.md) (as Rate Card).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Quote

Canonical concept: [Quote](../model/subjects/request/quote/quote.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Quote Line

Canonical concept: [Quote Line](../model/subjects/request/quote/quote-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rental Agreement

Canonical concept: [Rental Agreement](../model/subjects/agreement/agreement/rental-agreement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Job Order

Canonical concept: [Work Order](../model/subjects/work/work-effort/work-order.md) (as Job Order).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Change Order

Canonical concept: [Change Request](../model/subjects/request/order/change-request.md) (as Change Order).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Planning and compliance concepts

### Lift Plan

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Lift Plan Item

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rigging Plan

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Permit

Canonical concept: [Authorization](../model/subjects/case/decision/authorization.md) (as Permit).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Qualification

Canonical concept: [Qualification](../model/subjects/workforce/worker/qualification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Planning Requirement

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Readiness Review

Canonical concept: [Decision](../model/subjects/case/decision/decision.md) (as Readiness Review).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Reservation, dispatch, and transport

### Resource Requirement

Canonical concept: [Requirement](../model/subjects/scheduling/demand/requirement.md) (as Resource Requirement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reservation

Canonical concept: [Reservation](../model/subjects/scheduling/reservation/reservation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Crew Assignment

Canonical concept: [Assignment](../model/subjects/work/work-effort/assignment.md) (as Crew Assignment).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Dispatch Plan

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Transport Movement

Canonical concept: [Shipment](../model/subjects/fulfillment/fulfillment/shipment.md) (as Transport Movement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fleet Transfer

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Delivery, setup, and inspection

### Delivery

Canonical concept: [Delivery](../model/subjects/fulfillment/fulfillment/delivery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Setup Activity

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inspection

Canonical concept: [Inspection](../model/subjects/quality/quality-plan/inspection.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inspection Finding

Canonical concept: [Inspection Result](../model/subjects/quality/quality-plan/inspection-result.md) (as Inspection Finding).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Release for Service

Canonical concept: [Decision](../model/subjects/case/decision/decision.md) (as Release for Service).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Lift execution and operational events

### Pre-Lift Meeting

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Lift Activity

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Operational Observation

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Operational Delay

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Standby Period

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Stop-Work Event

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Incident

Canonical concept: [Incident](../model/subjects/case/case/incident.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Utilization, return, and maintenance

### Equipment Usage Record

Canonical concept: [Usage Record](../model/subjects/measurement/usage-record/usage-record.md) (as Equipment Usage Record).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fuel or Consumable Record

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Teardown Activity

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Return

Canonical concept: [Return](../model/subjects/fulfillment/return/return.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Damage Report

Canonical concept: [Incident](../model/subjects/case/case/incident.md) (as Damage Report).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Maintenance Work Order

Canonical concept: [Work Order](../model/subjects/work/work-effort/work-order.md) (as Maintenance Work Order).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Asset Availability

Canonical concept: [Availability](../model/subjects/resource/resource/availability.md) (as Asset Availability).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Charges, invoicing, and settlement

### Charge Event

Canonical concept: [Charge](../model/subjects/finance/invoice/charge.md) (as Charge Event).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Timesheet

Canonical concept: [Time Entry](../model/subjects/workforce/time-entry/time-entry.md) (as Timesheet).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice

Canonical concept: [Invoice](../model/subjects/finance/invoice/invoice.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice Line

Canonical concept: [Invoice Line](../model/subjects/finance/invoice/invoice-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Commercial Dispute

Canonical concept: [Dispute](../model/subjects/case/case/dispute.md) (as Commercial Dispute).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/crane-rental.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/crane-rental.md#lifecycle-models).

## Business events

See [canonical business events](behavior/crane-rental.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/crane-rental.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Which service models are offered: bare rental, operated rental, managed lift, taxi crane, tower crane, long-term rental, or consultation?
2. Which crane and lifting-equipment categories, attachments, rigging, transport units, and accessories are in scope?
3. Which branches, territories, legal entities, currencies, taxes, labor agreements, and jurisdictions apply?
4. How are load weight, center of gravity, dimensions, lift points, pick/set locations, radius, height, and path verified?
5. Which Lift Classifications exist, and what planning, engineering, review, and approval does each require?
6. Who is responsible for site access, ground bearing, underground services, power lines, traffic control, permits, rigging, and exclusion zones?
7. How are capacity charts, deductions, configurations, component compatibility, and manufacturer information governed?
8. Which Personnel roles, credentials, competencies, medical requirements, and supervision rules must be verified?
9. How are fleet availability, tentative reservations, conflicts, substitutions, extensions, and branch transfers handled?
10. Which transport, route survey, oversize permit, escort, loading, sequencing, and delivery constraints apply?
11. Which inspections are required daily, per shift, after assembly, periodically, after repair, or before release?
12. Which weather, wind, visibility, ground, equipment, or site thresholds cause warning, hold, or stop-work?
13. How are setup, operating, standby, delay, breakdown, teardown, and return times captured and approved?
14. Which customer contracts, rate cards, minimums, overtime, standby, fuel, transport, permit, engineering, damage, and cancellation charges apply?
15. How are long-duration rentals, maintenance access, meter readings, consumables, and replacement equipment managed?
16. Which subcontracted equipment, labor, transport, engineering, inspection, or permit services are used?
17. How are incidents, near misses, damage, claims, commercial disputes, and regulatory notifications managed?
18. Which fleet-utilization, safety, commercial, maintenance, customer, and project-performance measures are required?
19. Which external systems are authoritative for CRM, fleet, telematics, scheduling, qualifications, maintenance, accounting, weather, mapping, permits, and documents?
20. Which records must remain immutable and for how long?

## Candidate capabilities and use cases

| Capability | Candidate actor-goal use cases |
|---|---|
| Customer and Demand | Register Customer; Submit Lift Request; Qualify Opportunity; Capture Site and Load Requirements |
| Assessment | Conduct Site Survey; Classify Lift; Evaluate Ground and Access; Select Equipment Configuration |
| Commercial | Build Quote; Apply Rate Card; Review Credit; Accept Quote; Execute Agreement; Approve Change Order |
| Lift Planning | Create Lift Plan; Create Rigging Plan; Request Engineering Review; Obtain Plan Approval |
| Compliance | Obtain Permit; Verify Qualification; Verify Certification; Complete Readiness Review |
| Resource Planning | Reserve Crane; Reserve Components; Assign Crew; Resolve Conflict; Approve Substitution |
| Dispatch and Transport | Build Dispatch Plan; Plan Route; Dispatch Asset; Record Delivery; Transfer Fleet Asset |
| Site Operations | Complete Setup; Perform Inspection; Release Equipment; Conduct Pre-Lift Meeting |
| Lift Execution | Start Lift; Record Observations; Stop or Resume Work; Complete Lift; Record Delay or Standby |
| Fleet Return | Complete Teardown; Return Equipment; Reconcile Components; Record Damage; Release Asset |
| Maintenance | Open Work Order; Repair Asset; Verify Maintenance; Return Asset to Service |
| Billing | Record Usage; Approve Timesheet; Create Charge Events; Generate Invoice; Resolve Dispute; Allocate Payment |
| Governance | Amend Lift Plan; Record Incident; Audit Evidence; Publish Utilization and Safety Measures |

## MDE modeling guidance

- Model Crane Asset as an individual Asset and Equipment Model as the reusable technical definition.
- Keep Equipment Model, Crane Asset, Crane Configuration, Component, Capacity Evidence, and Lift Plan distinct.
- Keep Lift Request, Quote, Rental Agreement, Job Order, Reservation, Dispatch, and Lift Activity distinct.
- Treat qualifications, inspections, permits, certifications, engineering approvals, and readiness decisions as first-class effective-dated evidence.
- Separate planned resources from reservations and actual assignments or usage.
- Model bare rental, operated rental, and managed lift as service-model variations with explicit responsibility boundaries.
- Attach rules to authoritative operations such as propose configuration, reserve asset, release job, approve plan, release equipment, start lift, substitute resource, create charge, and return asset.
- Let use cases orchestrate actor goals and branching; do not bury capacity, qualification, readiness, or billing rules in workflow prose.
- Treat customer-supplied data, telematics, weather, maps, and external documents as sourced assertions with provenance and verification status.
- Use specialized patterns for tower crane, heavy haul, rigging-only, personnel lifting, or engineered lifts only where behavior and governance materially differ.

## Anti-patterns

### Crane Model Equals Crane Asset

A model defines reusable characteristics. An Asset has a serial number, location, condition, certification, maintenance, reservations, and history.

### Rated Capacity Equals Lift Capacity

Nameplate or maximum capacity does not determine suitability for a specific radius, boom, configuration, deductions, ground condition, and Lift.

### Quote Equals Lift Plan

The Quote is a commercial proposal. The Lift Plan is controlled operational and technical evidence.

### Reservation Equals Availability

A reservation allocates a Resource. Actual readiness also depends on condition, certification, maintenance, transport, configuration, and location.

### Job Status Controls Everything

Quote, Agreement, Reservation, Asset, Transport, Setup, Inspection, Lift, Maintenance, Invoice, and Dispute each require independent lifecycles.

### Operator Equals Logged-In User

System identity does not prove qualification, assignment, employer, equipment category, or authority.

### Scheduled Time Equals Billable Time

Planned duration, dispatch time, travel, setup, operation, standby, overtime, teardown, and minimum-charge periods are different measures.

### Free-Text Equipment Configuration

Configuration must be structured enough to verify compatibility, capacity evidence, inspections, substitutions, and actual execution.

### Overwriting the Lift Plan

Once reviewed or released, a Plan version is durable evidence. Changes create a new version with impact assessment and approval.

### Maintenance as a Note on the Asset

Defects, inspections, work orders, parts, repairs, verification, certification, and release decisions require separate traceable records.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Lift Request | `lift_request` |
| Load Requirement | `load_requirement` |
| Crane Asset | `crane_asset` |
| Crane Configuration | `crane_configuration` |
| Capacity Evidence | `capacity_evidence` |
| Rental Agreement | `rental_agreement` |
| Job Order | `job_order` |
| Lift Plan | `lift_plan` |
| Resource Requirement | `resource_requirement` |
| Crew Assignment | `crew_assignment` |
| Transport Movement | `transport_movement` |
| Lift Activity | `lift_activity` |
| Equipment Usage Record | `equipment_usage_record` |
| Maintenance Work Order | `maintenance_work_order` |
| Charge Event | `charge_event` |

Logical names remain authoritative. Stack, jurisdiction, fleet, safety, labor, and contract rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows; reference its existing entities. The first end-to-end vertical slice should be:

**Submit Lift Request → Conduct Site Survey → Select Crane Configuration → Issue and Accept Quote → Approve Lift Plan → Reserve Asset and Crew → Dispatch and Deliver → Inspect and Release → Execute Lift → Record Usage → Return Asset → Generate Invoice**

Recommended verification scenarios include incomplete load information, unverified ground condition, equipment reservation conflict, expired operator qualification, unavailable component, permit delay, substitute crane, blocking inspection defect, wind hold, stop-work and resume, breakdown with replacement Asset, overtime and standby billing, missing return component, damage dispute, mandatory maintenance due, and Lift Plan revision after site conditions change.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Customer Account | [Customer Account](../model/subjects/party/customer-account/customer-account.md) | [Customer Account](../model/subjects/party/customer-account/README.md) |
| Project | [Project](../model/subjects/work/project/project.md) | [Customer Account](../model/subjects/party/customer-account/README.md) |
| Job Site | [Job Site](../model/subjects/location/site/site.md) | [Customer Account](../model/subjects/party/customer-account/README.md) |
| Site Access Constraint | [Site Access Constraint](#concepts-applications-typically-add) | [Customer Account](../model/subjects/party/customer-account/README.md) |
| Ground Condition | [Ground Condition](#concepts-applications-typically-add) | [Customer Account](../model/subjects/party/customer-account/README.md) |
| Lift Request | [Lift Request](#concepts-applications-typically-add) | [Lift Request](#) |
| Load Requirement | [Load Requirement](#concepts-applications-typically-add) | [Lift Request](#) |
| Lift Condition | [Lift Condition](#concepts-applications-typically-add) | [Lift Request](#) |
| Site Survey | [Site Survey](../model/subjects/location/site/site-assessment.md) | [Lift Request](#) |
| Lift Classification | [Lift Classification](#concepts-applications-typically-add) | [Lift Request](#) |
| Equipment Model | [Equipment Model](../model/subjects/resource/equipment-model/equipment-model.md) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Crane Asset | [Crane Asset](../model/subjects/resource/equipment-model/equipment.md) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Equipment Component | [Equipment Component](../model/subjects/resource/equipment-model/equipment-component.md) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Crane Configuration | [Crane Configuration](../model/subjects/resource/equipment-model/equipment-configuration.md) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Capacity Evidence | [Capacity Evidence](#concepts-applications-typically-add) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Equipment Compatibility | [Equipment Compatibility](../model/subjects/resource/equipment-model/equipment-compatibility.md) | [Equipment Model](../model/subjects/resource/equipment-model/README.md) |
| Rental Offering | [Rental Offering](#concepts-applications-typically-add) | [Rental Offering](#) |
| Rate Card | [Rate Card](../model/subjects/product/offering/price-list.md) | [Rental Offering](#) |
| Quote | [Quote](../model/subjects/request/quote/quote.md) | [Rental Offering](#) |
| Quote Line | [Quote Line](../model/subjects/request/quote/quote-line.md) | [Rental Offering](#) |
| Rental Agreement | [Rental Agreement](../model/subjects/agreement/agreement/rental-agreement.md) | [Rental Offering](#) |
| Job Order | [Job Order](../model/subjects/work/work-effort/work-order.md) | [Rental Offering](#) |
| Change Order | [Change Order](../model/subjects/request/order/change-request.md) | [Rental Offering](#) |
| Lift Plan | [Lift Plan](#concepts-applications-typically-add) | [Lift Plan](#) |
| Lift Plan Item | [Lift Plan Item](#concepts-applications-typically-add) | [Lift Plan](#) |
| Rigging Plan | [Rigging Plan](#concepts-applications-typically-add) | [Lift Plan](#) |
| Permit | [Permit](../model/subjects/case/decision/authorization.md) | [Lift Plan](#) |
| Qualification | [Qualification](../model/subjects/workforce/worker/qualification.md) | [Lift Plan](#) |
| Planning Requirement | [Planning Requirement](#concepts-applications-typically-add) | [Lift Plan](#) |
| Readiness Review | [Readiness Review](../model/subjects/case/decision/decision.md) | [Lift Plan](#) |
| Resource Requirement | [Resource Requirement](../model/subjects/scheduling/demand/requirement.md) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Reservation | [Reservation](../model/subjects/scheduling/reservation/reservation.md) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Crew Assignment | [Crew Assignment](../model/subjects/work/work-effort/assignment.md) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Dispatch Plan | [Dispatch Plan](#concepts-applications-typically-add) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Transport Movement | [Transport Movement](../model/subjects/fulfillment/fulfillment/shipment.md) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Fleet Transfer | [Fleet Transfer](#concepts-applications-typically-add) | [Resource Requirement](../model/subjects/scheduling/demand/README.md) |
| Delivery | [Delivery](../model/subjects/fulfillment/fulfillment/delivery.md) | [Delivery](../model/subjects/fulfillment/fulfillment/README.md) |
| Setup Activity | [Setup Activity](#concepts-applications-typically-add) | [Delivery](../model/subjects/fulfillment/fulfillment/README.md) |
| Inspection | [Inspection](../model/subjects/quality/quality-plan/inspection.md) | [Delivery](../model/subjects/fulfillment/fulfillment/README.md) |
| Inspection Finding | [Inspection Finding](../model/subjects/quality/quality-plan/inspection-result.md) | [Delivery](../model/subjects/fulfillment/fulfillment/README.md) |
| Release for Service | [Release for Service](../model/subjects/case/decision/decision.md) | [Delivery](../model/subjects/fulfillment/fulfillment/README.md) |
| Pre-Lift Meeting | [Pre-Lift Meeting](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Lift Activity | [Lift Activity](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Operational Observation | [Operational Observation](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Operational Delay | [Operational Delay](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Standby Period | [Standby Period](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Stop-Work Event | [Stop-Work Event](#concepts-applications-typically-add) | [Pre-Lift Meeting](#) |
| Incident | [Incident](../model/subjects/case/case/incident.md) | [Pre-Lift Meeting](#) |
| Equipment Usage Record | [Equipment Usage Record](../model/subjects/measurement/usage-record/usage-record.md) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Fuel or Consumable Record | [Fuel or Consumable Record](#concepts-applications-typically-add) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Teardown Activity | [Teardown Activity](#concepts-applications-typically-add) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Return | [Return](../model/subjects/fulfillment/return/return.md) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Damage Report | [Damage Report](../model/subjects/case/case/incident.md) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Maintenance Work Order | [Maintenance Work Order](../model/subjects/work/work-effort/work-order.md) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Asset Availability | [Asset Availability](../model/subjects/resource/resource/availability.md) | [Equipment Usage Record](../model/subjects/measurement/usage-record/README.md) |
| Charge Event | [Charge Event](../model/subjects/finance/invoice/charge.md) | [Charge Event](../model/subjects/finance/invoice/README.md) |
| Timesheet | [Timesheet](../model/subjects/workforce/time-entry/time-entry.md) | [Charge Event](../model/subjects/finance/invoice/README.md) |
| Invoice | [Invoice](../model/subjects/finance/invoice/invoice.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Invoice Line | [Invoice Line](../model/subjects/finance/invoice/invoice-line.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Commercial Dispute | [Commercial Dispute](../model/subjects/case/case/dispute.md) | [Charge Event](../model/subjects/finance/invoice/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Site Access Constraint**: A condition affecting equipment choice, delivery, setup, movement, or removal.
- **Ground Condition**: Evidence concerning the surface and subsurface supporting crane setup or travel.
- **Lift Request**: A Customer request for equipment rental, lifting service, planning, or consultation.
- **Load Requirement**: A description of the object or material to be lifted and the required movement.
- **Lift Condition**: An operating or environmental condition relevant to planning and execution.
- **Lift Classification**: A governed classification that determines planning, review, approval, and execution requirements.
- **Capacity Evidence**: The governed source and evaluated result supporting equipment suitability for defined conditions.
- **Rental Offering**: A governed commercial service definition.
- **Lift Plan**: A versioned plan defining the Lift, equipment, configuration, load, path, roles, hazards, controls, communications, and execution conditions.
- **Lift Plan Item**: A structured element of a Lift Plan.
- **Rigging Plan**: A governed specification of rigging equipment, arrangement, capacity, angles, connection points, and inspection requirements.
- **Planning Requirement**: A required document, decision, review, resource, or approval before a Job stage.
- **Dispatch Plan**: A coordinated plan for assets, components, transport units, drivers, crew, route, sequence, and timing.
- **Fleet Transfer**: A controlled movement of an Asset between branch or fleet custody locations.
- **Setup Activity**: Assembly, positioning, configuration, stabilization, calibration, or commissioning work preparing Equipment for operation.
- **Pre-Lift Meeting**: A recorded briefing confirming the Lift Plan, roles, communications, hazards, controls, stop-work authority, and changes.
- **Lift Activity**: A bounded operational activity moving, holding, placing, or testing a Load.
- **Operational Observation**: A measured or observed condition during setup or Lift execution.
- **Operational Delay**: A period in which planned work could not proceed.
- **Standby Period**: A period during which committed Equipment or personnel remain available but are not productively operating.
- **Stop-Work Event**: A controlled halt due to safety, condition, authority, equipment, weather, plan deviation, or other concern.
- **Fuel or Consumable Record**: A record of fuel, lubricant, power, wear item, or other consumable supplied or used.
- **Teardown Activity**: Disassembly, deconfiguration, packing, loading, or site-restoration work following service.
