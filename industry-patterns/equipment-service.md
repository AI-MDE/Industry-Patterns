# Equipment Service and Field Service Model Pattern

## Classification

**Applied industry extension — outside the original industry subject list.**

This pattern models organizations that maintain, repair, and inspect equipment owned or used by their customers, in their own workshops or at customer sites, and that may also sell or lease that equipment. It composes the cross-industry [Party, Agreement, Request, Work Effort, and Status concepts](cross-industry.md) with the [Recurring Service and Constraint-Based Scheduling](../modeling-patterns/service-scheduling.md) modeling pattern.

It was derived from, and reconciled against, the `serviceProvider` MDE sample application (a heavy-equipment supplier that sells, leases, and services equipment). That application realizes most of the **Simple** variant and part of **Standard**.

Related patterns: [Industrial & Commercial Crane Rental Orchestration](crane-rental-orchestration.md) (rental-first, lift-planning-heavy) and [Manufacturing](manufacturing.md) (Product Deployment, Machine Asset, Warranty or Field Issue).

## Intent

Model a service organization that registers customer equipment, receives on-demand service requests and generates planned maintenance and inspections, determines the skills and resources the work requires, schedules and assigns qualified technicians, performs and records the work, captures labor and outcomes, and keeps an auditable service history per equipment item, alongside the sales and lease agreements under which equipment is supplied.

This is a logical business operations pattern. It is not a dispatch-optimization algorithm, a parts-inventory system, a regulatory inspection standard, or a billing engine.

## Business overview

**Equipment Registration → Service Need (request or plan) → Review/Acceptance → Required Skills and Resources → Scheduling and Assignment → Service Visit / Work → Time and Outcome Recording → Completion → Service History → (Billing)**

A Customer owns or leases Equipment items, each an instance of an Equipment Model within an Equipment Category. Service needs arise in two ways: a Customer Contact reports a problem or requests work (an on-demand Service Request), or a Maintenance Requirement defined for a category or model comes due by calendar interval or operating hours (planned demand). A Dispatcher reviews each request, accepts or rejects it, and determines where the work happens (workshop or on site).

The combination of Service Type and Equipment Category determines the Skills the work requires. The Dispatcher schedules the work and assigns one or more Technicians who are active, available, and hold every required Skill with a valid certification where one is mandatory. Complex work is broken into hierarchical Work Efforts. Technicians start and complete the work, log Time Entries that a Manager approves, and record completion notes and outcomes. Every status change is preserved in an immutable Status History, so each Equipment item carries a complete service history.

The same organization may sell or lease Equipment under Agreements with structured Agreement Roles and Agreement Terms. A Sale transfers ownership; a Lease grants use for an effective period. These agreements also determine warranty and service entitlement in the Standard variant.

## Pattern variants

### Simple

Use for a single-branch service shop or a prototype.

Core concepts: Customer; Contact; Equipment Category; Equipment Model; Equipment; Service Type; Service Request; Technician; Skill; Technician Skill; Skill Requirement; Service Request Assignment; Work Effort; Time Entry; Status History.

### Standard

Use as the default for an operational service organization.

Adds: Maintenance Requirement; Service Plan (equipment-specific maintenance or inspection schedule); Meter Reading; Technician Availability; Service Visit (actual occurrence, distinct from Assignment); Service Outcome and Finding; Equipment Agreement (Sale, Lease) with Agreement Role and Agreement Term; Warranty or Service Entitlement; Service Location (workshop bay, customer site); Document / Evidence (photos, checklists, sign-off).

### Enterprise

Use for multi-branch, contract-heavy, or regulated service operations.

Adds: Branch and Territory; Team / Crew; Service Vehicle; Tool and Test Equipment; Parts Usage and Reservation; Service Contract with SLA; Escalation; Inspection Standard and Checklist Version; Certification Authority; Subcontractor; Route and Travel; Charge, Invoice, and Payment; Equipment Telemetry; Analytics (utilization, first-time fix, mean time to repair, overdue maintenance).

## Actors and roles

See [canonical actors and roles](../model/domains/equipment-service/behavior.md#actors-and-roles).

## Customer and equipment concepts

### Customer

Canonical concept: [Customer](../model/domains/equipment-service/customer/customer.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Contact

Canonical concept: [Contact](../model/domains/equipment-service/customer/contact.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Equipment Category

Canonical concept: [Equipment Category](../model/domains/equipment-service/customer/equipment-category.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Equipment Model

Canonical concept: [Equipment Model](../model/domains/equipment-service/customer/equipment-model.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Equipment

Canonical concept: [Equipment](../model/domains/equipment-service/customer/equipment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Meter Reading (Standard)

Canonical concept: [Meter Reading](../model/domains/equipment-service/customer/meter-reading.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Service demand concepts

### Service Type

Canonical concept: [Service Type](../model/domains/equipment-service/service-type/service-type.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Request

Canonical concept: [Service Request](../model/domains/equipment-service/service-type/service-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Maintenance Requirement (Standard)

Canonical concept: [Maintenance Requirement](../model/domains/equipment-service/service-type/maintenance-requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Plan (Standard)

Canonical concept: [Service Plan](../model/domains/equipment-service/service-type/service-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Resource and qualification concepts

### Technician

Canonical concept: [Technician](../model/domains/equipment-service/technician/technician.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Skill

Canonical concept: [Skill](../model/domains/equipment-service/technician/skill.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Technician Skill

Canonical concept: [Technician Skill](../model/domains/equipment-service/technician/technician-skill.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Skill Requirement

Canonical concept: [Skill Requirement](../model/domains/equipment-service/technician/skill-requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Technician Availability (Standard)

Canonical concept: [Technician Availability](../model/domains/equipment-service/technician/technician-availability.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Execution concepts

### Service Request Assignment

Canonical concept: [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/service-request-assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Work Effort

Canonical concept: [Work Effort](../model/domains/equipment-service/service-request-assignment/work-effort.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Visit (Standard)

Canonical concept: [Service Visit](../model/domains/equipment-service/service-request-assignment/service-visit.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Time Entry

Canonical concept: [Time Entry](../model/domains/equipment-service/service-request-assignment/time-entry.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Outcome and Finding (Standard)

Canonical concept: [Service Outcome and Finding](../model/domains/equipment-service/service-request-assignment/service-outcome-and-finding.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Status History

Canonical concept: [Status History](../model/domains/work-management/status-type/status-history.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Agreement concepts

### Equipment Agreement

Canonical concept: [Equipment Agreement](../model/domains/equipment-service/equipment-agreement/equipment-agreement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Agreement Role

Canonical concept: [Agreement Role](../model/domains/agreement/agreement/agreement-role.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Agreement Term

Canonical concept: [Agreement Term](../model/domains/agreement/agreement/agreement-term.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Warranty or Service Entitlement (Standard)

Canonical concept: [Warranty or Service Entitlement](../model/domains/equipment-service/equipment-agreement/warranty-or-service-entitlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../model/domains/equipment-service/behavior.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/equipment-service/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/equipment-service/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/equipment-service/behavior.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Is work performed in workshops, at customer sites, or both, and does location change the required resources (vehicle, tools, bay)?
2. Which Service Types exist, and are they configurable by the business?
3. How are required skills determined: by service type and equipment category, by model, by individual job, or by dispatcher judgment? *Default:* Service Type × Equipment Category mapping.
4. Which skills require certification, and what happens when a certification expires mid-assignment? *Default:* expired certification blocks new assignments only.
5. Is technician availability (shifts, leave, existing workload) a scheduling constraint, or does the dispatcher manage it outside the system? *Default:* outside the system for Simple; modeled in Standard.
6. Can one request need several technicians at the same time, or in sequence?
7. Is planned maintenance generated automatically when due, suggested for review, or only tracked? *Default:* suggested for dispatcher review.
8. Is maintenance due by calendar, operating hours, or whichever comes first, and where do meter readings come from? *Default:* whichever comes first; readings entered by technicians.
9. Do Maintenance Requirements apply per category, per model, or per individual equipment item under a contract?
10. What happens when a technician cannot complete the work (no access, parts missing, further fault found): reschedule the same request or open a follow-up? *Default:* reschedule the same request.
11. What must be recorded on completion: free-text notes, structured findings, checklists, photos, customer sign-off?
12. Which inspections are regulated, and must inspection results be attested and retained?
13. Is time billable by default, who approves it, and is approved time the basis for invoicing?
14. Are parts used on a job recorded, even if inventory is out of scope?
15. Do sales, leases, warranties, or service contracts determine whether service is covered or charged?
16. Who requests service: staff only, or customers through a portal?
17. Which measures matter: backlog, overdue maintenance, first-time fix rate, utilization, response time, repeat failures?

## Candidate capabilities and use cases

| Capability | Candidate actor-goal use cases |
|---|---|
| Customer and Equipment | Add Customer; Manage Contacts; Register Equipment; Record Meter Reading; View Equipment Service History |
| Service Requests | Create, Submit, Accept, Reject, Cancel Service Request; View Service Request |
| Scheduling and Dispatch | Determine Required Skills; Find Qualified Available Technicians; Assign Technician; Schedule or Reschedule Service |
| Service Execution | Plan Work Efforts; Start Service Work; Start or Complete Work Effort; Record Outcome and Findings; Complete Service Request |
| Labor | Log, Submit, Return, and Approve Time Entry |
| Planned Maintenance | Define Maintenance Requirement; Create Service Plan; Generate Due Maintenance; Review Overdue Maintenance |
| Technician Management | Add Technician; Define Skill; Assign or Remove Skill; Renew Certification; Deactivate Technician |
| Equipment Sales and Lease | Record Sale or Lease; Add Roles and Terms; Activate, Complete, or Cancel Agreement; View Agreements |

## MDE modeling guidance

- Bind the scheduling pattern's roles to the business's own concepts (Service Request is Demand, Skill is Capability, Skill Requirement is Requirement, assignment is Assignment) rather than adding generic Demand or Resource entities.
- Keep Equipment Model (catalog) separate from Equipment (physical item).
- Keep on-demand Service Requests and planned Service Plans as different origins of the same schedulable demand; the scheduling rules must not depend on the origin.
- Keep required skills derived from configuration, not typed per request, so policy changes apply consistently.
- Introduce Service Visit when partial completion, return visits, or no-access outcomes matter; until then, request status and completion notes suffice.
- Keep Status History generic across stateful entities instead of one history table per entity.
- Treat equipment sales and leases as Agreements with roles and terms, not as fields on Equipment.
- Attach rules to entity operations (assign, schedule, start, complete, approve, activate) and let use cases orchestrate them.

## Anti-patterns

### Equipment Model Equals Equipment

A make and model is catalog content. Service history, ownership, meter readings, and agreements belong to the serialized item.

### Skills Typed on Each Request

Required skills entered by hand per request drift from policy. Derive them from Service Type and Equipment Category, and allow explicit additions only as recorded exceptions.

### Assignment Equals Visit

Assigning a technician for a date is a plan. What happened on site (arrival, work done, no access, partial completion) is a separate record.

### Maintenance as a Reminder Note

A maintenance obligation written as a note on the equipment cannot generate demand, report overdue work, or trace fulfilled occurrences.

### Certification as a Yes/No Flag

Without certification dates and expiry, the system cannot prevent assigning a technician whose certification lapsed.

### Completion Notes as the Only Outcome

Free text cannot support inspection pass/fail reporting, repeat-failure analysis, or follow-up generation.

### Ownership as an Editable Field

Changing Equipment's customer by edit loses the sale or lease that caused it. Ownership changes follow Agreement activation.

### Per-Entity Status Columns Without History

Current status alone cannot answer who rejected a request, when it was rescheduled, or why it was cancelled.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Equipment | `equipment` |
| Equipment Model | `equipment_model` |
| Service Request | `service_request` |
| Service Request Assignment | `service_request_assignment` |
| Skill Requirement | `skill_requirement` |
| Technician Skill | `technician_skill` |
| Maintenance Requirement | `maintenance_requirement` |
| Service Plan | `service_plan` |
| Service Visit | `service_visit` |
| Work Effort | `work_effort` |
| Time Entry | `time_entry` |
| Equipment Agreement | `equipment_agreement` |
| Status History | `status_history` |

Logical names remain authoritative. Physical names are generated only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows; reference its existing entities. The first end-to-end vertical slice should be:

**Register Equipment → Create and Accept Service Request → Derive Required Skills → Assign Qualified Technician → Schedule → Start Work → Log Time → Complete with Outcome → Approve Time → View Service History**

Recommended verification scenarios include: no qualified technician available, certification expired before the scheduled date, two technicians needed to cover the required skills, no access on site, reschedule after partial work, rejected request, maintenance due by operating hours, overdue maintenance, lease overlapping an existing active lease, and sale transferring ownership.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Customer | [Customer](../model/domains/equipment-service/customer/customer.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Contact | [Contact](../model/domains/equipment-service/customer/contact.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Equipment Category | [Equipment Category](../model/domains/equipment-service/customer/equipment-category.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Equipment Model | [Equipment Model](../model/domains/equipment-service/customer/equipment-model.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Equipment | [Equipment](../model/domains/equipment-service/customer/equipment.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Meter Reading (Standard) | [Meter Reading](../model/domains/equipment-service/customer/meter-reading.md) | [Customer](../model/domains/equipment-service/customer/README.md) |
| Service Type | [Service Type](../model/domains/equipment-service/service-type/service-type.md) | [Service Type](../model/domains/equipment-service/service-type/README.md) |
| Service Request | [Service Request](../model/domains/equipment-service/service-type/service-request.md) | [Service Type](../model/domains/equipment-service/service-type/README.md) |
| Maintenance Requirement (Standard) | [Maintenance Requirement](../model/domains/equipment-service/service-type/maintenance-requirement.md) | [Service Type](../model/domains/equipment-service/service-type/README.md) |
| Service Plan (Standard) | [Service Plan](../model/domains/equipment-service/service-type/service-plan.md) | [Service Type](../model/domains/equipment-service/service-type/README.md) |
| Technician | [Technician](../model/domains/equipment-service/technician/technician.md) | [Technician](../model/domains/equipment-service/technician/README.md) |
| Skill | [Skill](../model/domains/equipment-service/technician/skill.md) | [Technician](../model/domains/equipment-service/technician/README.md) |
| Technician Skill | [Technician Skill](../model/domains/equipment-service/technician/technician-skill.md) | [Technician](../model/domains/equipment-service/technician/README.md) |
| Skill Requirement | [Skill Requirement](../model/domains/equipment-service/technician/skill-requirement.md) | [Technician](../model/domains/equipment-service/technician/README.md) |
| Technician Availability (Standard) | [Technician Availability](../model/domains/equipment-service/technician/technician-availability.md) | [Technician](../model/domains/equipment-service/technician/README.md) |
| Service Request Assignment | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/service-request-assignment.md) | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/README.md) |
| Work Effort | [Work Effort](../model/domains/equipment-service/service-request-assignment/work-effort.md) | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/README.md) |
| Service Visit (Standard) | [Service Visit](../model/domains/equipment-service/service-request-assignment/service-visit.md) | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/README.md) |
| Time Entry | [Time Entry](../model/domains/equipment-service/service-request-assignment/time-entry.md) | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/README.md) |
| Service Outcome and Finding (Standard) | [Service Outcome and Finding](../model/domains/equipment-service/service-request-assignment/service-outcome-and-finding.md) | [Service Request Assignment](../model/domains/equipment-service/service-request-assignment/README.md) |
| Status History | [Status History](../model/domains/work-management/status-type/status-history.md) | [Status Type](../model/domains/work-management/status-type/README.md) |
| Equipment Agreement | [Equipment Agreement](../model/domains/equipment-service/equipment-agreement/equipment-agreement.md) | [Equipment Agreement](../model/domains/equipment-service/equipment-agreement/README.md) |
| Agreement Role | [Agreement Role](../model/domains/agreement/agreement/agreement-role.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Agreement Term | [Agreement Term](../model/domains/agreement/agreement/agreement-term.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Warranty or Service Entitlement (Standard) | [Warranty or Service Entitlement](../model/domains/equipment-service/equipment-agreement/warranty-or-service-entitlement.md) | [Equipment Agreement](../model/domains/equipment-service/equipment-agreement/README.md) |
