---
type: entity
title: "Crane Configuration"
---

# Crane Configuration

Domain: [Crane Rental](../README.md). ABE: [Equipment Model](README.md).

## Definition and detail

A planned or actual assembly of a Crane Asset and compatible components for a Job.

Logical attributes: Configuration Identifier; Configuration Type; Status; Crane Asset or Model; Boom Length; Jib; Counterweight; Reeving; Outrigger Position; Matting; Applicable Chart Reference; Effective Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#crane-configuration) | Crane Configuration |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Plan](../lift-plan/lift-plan.md) | specifies | [Crane Configuration](crane-configuration.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Crane Configuration](crane-configuration.md) | uses | Crane Asset or Equipment Model (review) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Crane Configuration](crane-configuration.md) | contains | [Equipment Component](equipment-component.md) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
