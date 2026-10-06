---
type: entity
title: "Operational Observation"
---

# Operational Observation

Domain: [Crane Rental](../README.md). ABE: [Pre-Lift Meeting](README.md).

## Definition and detail

A measured or observed condition during setup or Lift execution.

Logical attributes: Observation Identifier; Observation Type; Observed At; Value; Unit; Location; Source; Observer; Threshold Status.

Examples: wind, ground movement, radius, load indication, boom angle, equipment alarm, or exclusion-zone breach.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#operational-observation) | Operational Observation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Activity](lift-activity.md) | records | [Operational Observation](operational-observation.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
