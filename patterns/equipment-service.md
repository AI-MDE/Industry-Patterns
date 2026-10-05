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

| Role | Meaning |
|---|---|
| Customer | Organization or person that owns, leases, or operates serviced equipment. |
| Customer Contact | Person at the customer who requests work, provides site access, or signs off. |
| Dispatcher | Reviews, accepts, schedules, and assigns service work. |
| Technician | Performs service work, records progress, time, and outcomes. |
| Service Manager | Oversees operations, approves time, manages technicians and skills, overrides. |
| Sales / Lease Administrator | Prepares and executes equipment sales and lease agreements. |
| Customer Administrator | Maintains customer, contact, and equipment records. |
| Inspector | Technician role certified to perform and attest regulated inspections (Standard+). |
| System Administrator | Maintains reference data and configuration. |

Rule: Person, Technician, employee, application user, and Customer Contact are distinct roles. A Customer Contact is not an application user unless a customer portal is in scope.

## Customer and equipment concepts

### Customer

Party whose equipment is serviced or supplied. Specializes cross-industry Party in a customer role.

### Contact

Person representing a Customer in a capacity such as site manager, operator, or procurement. Specializes Party Contact. One Contact is primary per Customer.

### Equipment Category

Functional classification of equipment (excavator, crane, generator). Drives skill requirements and maintenance requirements.

### Equipment Model

Make and model designation within a category. Catalog content, not a physical item.

### Equipment

A specific physical item, identified by serial number, instance of one Equipment Model, owned by or registered to one Customer. It is the subject of service history and of agreements.

### Meter Reading (Standard)

Recorded operating hours, mileage, or cycles at a point in time, with source and reader. Drives usage-based maintenance.

## Service demand concepts

### Service Type

Configured classification of service work (repair, preventive maintenance, inspection, overhaul).

### Service Request

On-demand expression of need for service on one Equipment item, from a Contact, with priority, location (workshop or on site), requested date, and lifecycle. Binds the **Service Request** and **Demand** roles of the scheduling pattern.

### Maintenance Requirement (Standard)

Recurring obligation defined for an Equipment Category (or Model): service type, interval by months and/or operating hours. Configuration-time definition.

### Service Plan (Standard)

Equipment-specific application of Maintenance Requirements: next due date or meter value, last performed, and status. Binds the **Service Plan** role; generates Service Requests (Demand) when due and remains a governing object afterwards.

## Resource and qualification concepts

### Technician

Staff member who performs service work. Active or Inactive; never deleted.

### Skill

Area of technical expertise, flagged when certification is required to exercise it. Binds the **Capability** role.

### Technician Skill

Technician's holding of a Skill with certification date, expiry, and certificate number. An expired certification means the skill is not held for assignment purposes.

### Skill Requirement

Configuration mapping (Service Type × Equipment Category → Skill set) used to derive the Skills a request requires. Binds the **Requirement** role.

### Technician Availability (Standard)

Working periods, absences, and capacity during which a Technician can be assigned. Binds **Availability**.

## Execution concepts

### Service Request Assignment

Commitment of a Technician to a Service Request (and, in Standard, to a period). A request may need several Technicians who together cover all required Skills. Binds **Assignment**.

### Work Effort

Planned or performed unit of work within a request, hierarchical (phase → task) and sequenced, optionally assigned to one of the request's Technicians. Specializes cross-industry Work Effort.

### Service Visit (Standard)

The actual bounded occurrence at a location: arrival, start, end, attended technicians, result (completed, partially completed, no access, rescheduled). Binds **Service Event**. Distinct from the Assignment that planned it.

### Time Entry

Labor recorded by a Technician against a request and optionally a Work Effort: date, hours, billable flag, and approval lifecycle.

### Service Outcome and Finding (Standard)

Structured result of the work: work performed, findings and defects, inspection pass/fail, follow-up recommended, customer sign-off. Free-text completion notes alone are the Simple variant.

### Status History

Immutable record of every status transition on tracked entities: subject, from/to status, when, who, and reason. Specializes cross-industry Status History.

## Agreement concepts

### Equipment Agreement

Sale or Lease of an Equipment item to a Customer, with effective and expiration dates and lifecycle. Specializes cross-industry Agreement.

### Agreement Role

Capacity in which a party participates in an agreement (buyer, seller, lessee, lessor, guarantor).

### Agreement Term

Structured clause: payment schedule, renewal, warranty, penalty, insurance, return, with value, unit, and effective period.

### Warranty or Service Entitlement (Standard)

Coverage derived from an Agreement Term or service contract that determines whether service is covered, by whom, and until when.

## Relationship model

```text
Customer 1──* Contact
Customer 1──* Equipment *──1 Equipment Model *──1 Equipment Category
Equipment 1──* Meter Reading                                   (Standard)
Equipment Category 1──* Maintenance Requirement *──1 Service Type
Equipment 1──* Service Plan *──1 Maintenance Requirement       (Standard)
Service Plan 1──* Service Request (generated)                  (Standard)
Equipment 1──* Service Request *──1 Service Type
Service Request *──1 Contact
Skill Requirement: (Service Type, Equipment Category) ──* Skill
Service Request 1──* Service Request Assignment *──1 Technician
Technician 1──* Technician Skill *──1 Skill
Technician 1──* Technician Availability                        (Standard)
Service Request 1──* Work Effort (recursive parent/child)
Service Request 1──* Service Visit                             (Standard)
Service Request 1──* Time Entry *──0..1 Work Effort
Time Entry *──1 Technician
Equipment 1──* Equipment Agreement 1──* Agreement Role, Agreement Term
Any stateful entity 1──* Status History
```

## Lifecycle models

### Service Request

Draft → Submitted → Accepted → Scheduled → InProgress → Completed; Submitted → Cancelled (reject); Accepted/Scheduled → Cancelled; InProgress → Scheduled (reschedule after partial work or no access). Completed and Cancelled are final.

### Work Effort

Planned → InProgress → Completed; Planned/InProgress → Cancelled.

### Time Entry

Draft → Submitted → Approved; Submitted → Draft (returned for correction).

### Technician

Active ↔ Inactive (reactivation is a business decision; deletion is not allowed).

### Service Plan (Standard)

Active → Paused → Active; Active → Ended. Each due occurrence: Upcoming → Due → Generated (request created) → Fulfilled or Overdue.

### Equipment Agreement

Draft → Active → Completed; Draft/Active → Cancelled. Completed and Cancelled are final.

## Business events

- Equipment Registered, Transferred, or Retired
- Meter Reading Recorded
- Maintenance Became Due or Overdue
- Service Request Created, Submitted, Accepted, Rejected, Scheduled, Rescheduled, Started, Completed, or Cancelled
- Technician Assigned or Unassigned
- Work Effort Started, Completed, or Cancelled
- Service Visit Started, Completed, or Failed (no access, parts missing)
- Inspection Passed or Failed
- Time Entry Submitted, Returned, or Approved
- Technician Activated or Deactivated
- Skill Certified, Renewed, or Expired
- Agreement Activated, Completed, or Cancelled
- Equipment Ownership Transferred (on sale activation)

## Baseline business and integrity rules

1. Equipment must belong to an existing Customer and reference one Equipment Model; equipment with service history is never deleted.
2. The Skills a Service Request requires are derived from its Service Type and its Equipment's Category through Skill Requirements.
3. Assigned Technicians must collectively cover every required Skill.
4. A Technician may be assigned only while Active and only for Skills held with a valid, unexpired certification where the Skill requires certification.
5. A Service Request may not be Scheduled until at least one Technician is assigned and a date is set.
6. (Standard) Every assigned Technician must be available for the scheduled interval; Technicians who must work together must overlap for the whole interval.
7. A Work Effort's Technician must be one of the request's assigned Technicians; a parent Work Effort completes only after all children are completed or cancelled.
8. Time may be logged only by an assigned Technician, only for requests InProgress or Completed, with hours greater than zero; submitted and approved entries are not editable.
9. Completed and Cancelled requests and agreements are not reopened; follow-up work is a new request linked to the original.
10. Every status transition on a tracked entity creates an immutable Status History record with actor, time, and reason.
11. A Maintenance Requirement defines at least one interval (calendar or operating hours); (Standard) a generated request traces to the Service Plan and occurrence that produced it.
12. An Agreement requires its mandatory roles (buyer and seller, or lessee and lessor) and at least one term before activation; terms change only while Draft.
13. A Lease requires effective and expiration dates; an Equipment item has at most one active Lease at a time.
14. Activating a Sale transfers Equipment ownership to the buyer.
15. (Standard) A Service Assignment is a plan; a Service Visit records what happened. Completion and billing rely on the Visit and Outcome, not on the Assignment.

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

## Future knowledge-base expansion

A metamodel-conformant Equipment Service knowledge base should instantiate separate capability, entity, role, business-rule, use-case, workflow, scenario, and test artifacts from this pattern. The first end-to-end vertical slice should be:

**Register Equipment → Create and Accept Service Request → Derive Required Skills → Assign Qualified Technician → Schedule → Start Work → Log Time → Complete with Outcome → Approve Time → View Service History**

Recommended verification scenarios include: no qualified technician available, certification expired before the scheduled date, two technicians needed to cover the required skills, no access on site, reschedule after partial work, rejected request, maintenance due by operating hours, overdue maintenance, lease overlapping an existing active lease, and sale transferring ownership.
