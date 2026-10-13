# Equipment Service and Field Service Model Pattern: business definitions

These reusable definitions belong to the canonical model. The [industry pattern](../equipment-service.md) supplies context, variants, selection guidance, and modeling questions. Applications select and specialize these requirements and define their own architecture.

Relationships retain their source expressions and original cardinalities; consult [the manifest](../../model/model.json) and [semantic review](../../model/integration-review.md) before interpreting unresolved compound endpoints. Lifecycle descriptions are business guidance, not implementation state machines.

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
