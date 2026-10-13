---
type: entity
title: "Equipment Configuration"
---

# Equipment Configuration

Subject: [Resources and Assets](../README.md). ABE: [Equipment Model](README.md).

Also known as: Crane Configuration (Crane Rental).

## Definition and detail

A planned or actual assembly of a Crane Asset and compatible components for a Job.

Logical attributes: Configuration Identifier; Configuration Type; Status; Crane Asset or Model; Boom Length; Jib; Counterweight; Reeving; Outrigger Position; Matting; Applicable Chart Reference; Effective Time.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#crane-configuration) | Crane Configuration |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Plan](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | specifies | Crane Configuration | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Crane Configuration | uses | Crane Asset or Equipment Model (review) | M:1 | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Crane Configuration | contains | [Equipment Component](equipment-component.md) | M:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
