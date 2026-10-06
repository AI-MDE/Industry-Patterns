---
type: entity
title: "Lift Activity"
---

# Lift Activity

Domain: [Crane Rental](../README.md). ABE: [Pre-Lift Meeting](README.md).

Specializes: [Work Effort](../../work-management/work-effort/work-effort.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A bounded operational activity moving, holding, placing, or testing a Load.

Logical attributes: Lift Activity Identifier; Lift Number; Lift Status; Job Order; Lift Plan Version; Load Requirement; Start Time; End Time; Crane Asset; Actual Configuration; Operator; Lift Director; Outcome.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#lift-activity) | Lift Activity |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | contains | [Lift Activity](lift-activity.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Activity](lift-activity.md) | follows | Lift Plan Version (review) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Activity](lift-activity.md) | uses | Crane Asset and Configuration (review) | M:1 each | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Activity](lift-activity.md) | records | [Operational Observation](operational-observation.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
