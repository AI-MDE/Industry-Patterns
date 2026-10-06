---
type: entity
title: "Job Order"
---

# Job Order

Domain: [Crane Rental](../README.md). ABE: [Rental Offering](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An authorized operational order to plan and perform a rental or lifting engagement.

Logical attributes: Job Order Identifier; Job Number; Job Status; Agreement; Project; Site; Scheduled Start; Scheduled End; Service Model; Responsible Branch; Coordinator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#job-order) | Job Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](../customer-account/project.md) | contains | [Job Order](job-order.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Rental Agreement](rental-agreement.md) | governs | [Job Order](job-order.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | has | [Lift Plan](../lift-plan/lift-plan.md) | 1:M versions | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | has | [Resource Requirement](../resource-requirement/resource-requirement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | has | [Crew Assignment](../resource-requirement/crew-assignment.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | has | [Setup Activity](../delivery/setup-activity.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | contains | [Lift Activity](../pre-lift-meeting/lift-activity.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | records | Delay, Standby, Stop-Work, or Incident (review) | 1:M each | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | concludes with | Teardown and Return (review) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Job Order](job-order.md) | produces | [Charge Event](../charge-event/charge-event.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
