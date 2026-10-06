---
type: entity
title: "Inspection Finding"
---

# Inspection Finding

Domain: [Crane Rental](../README.md). ABE: [Delivery](README.md).

## Definition and detail

A condition, defect, nonconformance, or observation found during Inspection.

Logical attributes: Finding Identifier; Finding Type; Severity; Description; Status; Required Action; Responsible Party; Due Date; Resolution Evidence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#inspection-finding) | Inspection Finding |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Inspection](inspection.md) | contains | [Inspection Finding](inspection-finding.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
