---
type: entity
title: "Assignment"
---

# Assignment

Subject: [Work and Projects](../README.md). ABE: [Work Effort](README.md).

Also known as: Assignment (Scheduling), Crew Assignment (Crane Rental), Service Request Assignment (Equipment Service), Claim Assignment (Insurance), Provider Assignment (Physical Therapy), Project Assignment (Professional Services).

## Definition and detail

The allocation of a Party Role or resource to a Work Effort with a stated responsibility.

Logical attributes: Assignment Identifier; Assignment Role; Assignment Status; Allocation; Assigned From; Assigned Through.

### In industries

- **Assignment** (Scheduling): The commitment of one or more Resources to a Demand for a defined period and context.
- **Crew Assignment** (Crane Rental): A Person's scheduled operational role on a Job Order, movement, setup, or Lift. Attributes: Assignment Identifier; Person; Role; Job Order; Shift; Start Time; End Time; Status; Qualification Verification; Supervisor.
- **Service Request Assignment** (Equipment Service): Commitment of a Technician to a Service Request (and, in Standard, to a period). A request may need several Technicians who together cover all required Skills. Binds **Assignment**.
- **Claim Assignment** (Insurance): Allocation of responsibility for a Claim, Exposure, investigation, or task. Attributes: Assignment Identifier; Assignment Type; Assigned Role or Party; Assignment Status; Assigned Date; Due Date; Authority Limit.
- **Provider Assignment** (Physical Therapy): A Provider's responsibility within an Episode, Plan of Care, Visit, or program. Attributes: Assignment Identifier; Assignment Role; Assignment Status; Assigned Date; Effective From; Effective Through; Supervising Provider; Responsibility.
- **Project Assignment** (Professional Services): A Professional's role and responsibility on a Project. Attributes: Assignment Identifier; Assignment Role; Assignment Status; Assignment Start Date; Assignment End Date; Allocation Percentage; Planned Hours; Billing Rate Override.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#assignment) | Assignment |
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#assignment) | Assignment |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#crew-assignment) | Crew Assignment |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#service-request-assignment) | Service Request Assignment |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#claim-assignment) | Claim Assignment |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#provider-assignment) | Provider Assignment |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Project Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party Role](../../party/party/party-role.md) | receives | Assignment | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Assignment | allocates to | [Work Effort](work-effort.md) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Job Order](work-order.md) | has | Crew Assignment | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Claim or Exposure (review) | receives | Claim Assignment | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Therapy Provider](../../../../industry-patterns/physical-therapy-clinic.md#concepts-applications-typically-add) | receives | Provider Assignment | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Project](../project/project.md) | has | Project Assignment | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Professional](../../workforce/worker/worker.md) | participates through | Project Assignment | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
