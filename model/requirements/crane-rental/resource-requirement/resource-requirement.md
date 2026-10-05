---
type: primary-entity
title: "Resource Requirement"
---

# Resource Requirement

Domain: [Crane Rental](../README.md). ABE: [Resource Requirement](README.md).

Specializes: [Requirement](../../scheduling/demand/requirement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A required asset, component, person, service, or capacity for a Job Order.

Logical attributes: Requirement Identifier; Resource Type; Required Capability; Quantity; Start Time; End Time; Location; Priority; Substitution Rule.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#resource-requirement) | Resource Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | has | [Resource Requirement](resource-requirement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Resource Requirement](resource-requirement.md) | fulfilled by | [Reservation](reservation.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
