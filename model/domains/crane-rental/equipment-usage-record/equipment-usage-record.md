---
type: primary-entity
title: "Equipment Usage Record"
---

# Equipment Usage Record

Domain: [Crane Rental](../README.md). ABE: [Equipment Usage Record](README.md).

Specializes: [Measurement](../../measurement/measure/measurement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A measured period or quantity of Asset use or availability.

Logical attributes: Usage Identifier; Asset; Job Order; Usage Type; Start Time; End Time; Meter Start; Meter End; Operating Hours; Standby Hours; Source; Verification Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#equipment-usage-record) | Equipment Usage Record |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Asset (review) | produces | [Equipment Usage Record](equipment-usage-record.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
