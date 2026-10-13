---
type: entity
title: "Work Order"
---

# Work Order

Subject: [Work and Projects](../README.md). ABE: [Work Effort](README.md).

Also known as: Job Order (Crane Rental), Maintenance Work Order (Crane Rental), Maintenance Work Order (Manufacturing), Field Work Order (Telecommunications).

## Definition and detail

An authorized operational order to plan and perform a rental or lifting engagement.

Logical attributes: Job Order Identifier; Job Number; Job Status; Agreement; Project; Site; Scheduled Start; Scheduled End; Service Model; Responsible Branch; Coordinator.

### In industries

- **Maintenance Work Order** (Crane Rental): A controlled request to inspect, service, repair, certify, or restore an Asset. Attributes: Work Order Identifier; Work Order Type; Status; Asset; Opened Date; Priority; Reason; Assigned Technician; Planned Completion; Actual Completion; Release Decision.
- **Maintenance Work Order** (Manufacturing): A controlled request to inspect, calibrate, service, or repair a Machine Asset or Tool. Attributes: Maintenance Order Identifier; Type; Status; Asset or Tool; Priority; Opened Date; Due Date; Started Date; Completed Date; Release Decision.
- **Field Work Order** (Telecommunications): An instruction for on-site installation, repair, survey, replacement, or recovery. Attributes: Work Order Identifier; Work Type; Status; Site; Appointment; Assigned Technician; Required Skill; Equipment; Planned Start; Completed At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#job-order) | Job Order |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#maintenance-work-order) | Maintenance Work Order |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#maintenance-work-order) | Maintenance Work Order |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#field-work-order) | Field Work Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](../project/project.md) | contains | Job Order | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Rental Agreement](../../agreement/agreement/rental-agreement.md) | governs | Job Order | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | has | [Lift Plan](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | 1:M versions | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | has | [Resource Requirement](../../scheduling/demand/requirement.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | has | [Crew Assignment](assignment.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | has | [Setup Activity](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | contains | [Lift Activity](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | records | Delay, Standby, Stop-Work, or Incident (review) | 1:M each | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | concludes with | Teardown and Return (review) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Job Order | produces | [Charge Event](../../finance/invoice/charge.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
