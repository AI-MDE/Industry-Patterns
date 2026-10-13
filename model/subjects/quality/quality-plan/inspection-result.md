---
type: entity
title: "Inspection Result"
---

# Inspection Result

Subject: [Quality and Inspection](../README.md). ABE: [Quality Plan](README.md).

Also known as: Inspection Finding (Crane Rental).

## Definition and detail

A measured or classified result for one inspection characteristic.

Logical attributes: Result Identifier; Characteristic; Value; Unit; Lower Limit; Upper Limit; Conformance; Method; Evidence.

### In industries

- **Inspection Finding** (Crane Rental): A condition, defect, nonconformance, or observation found during Inspection. Attributes: Finding Identifier; Finding Type; Severity; Description; Status; Required Action; Responsible Party; Due Date; Resolution Evidence.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#inspection-finding) | Inspection Finding |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#inspection-result) | Inspection Result |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Inspection](inspection.md) | contains | Inspection Finding | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Inspection](inspection.md) | contains | Inspection Result | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
