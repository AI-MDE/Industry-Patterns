---
type: entity
title: "Load Requirement"
---

# Load Requirement

Domain: [Crane Rental](../README.md). ABE: [Lift Request](README.md).

## Definition and detail

A description of the object or material to be lifted and the required movement.

Logical attributes: Load Requirement Identifier; Load Description; Load Type; Verified Weight; Estimated Weight; Dimensions; Center of Gravity Evidence; Pick Location; Set Location; Required Height; Required Radius; Orientation; Lift Points.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#load-requirement) | Load Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](lift-request.md) | contains | [Load Requirement](load-requirement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Plan](../lift-plan/lift-plan.md) | references | [Load Requirement](load-requirement.md) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
