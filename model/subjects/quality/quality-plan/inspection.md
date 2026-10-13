---
type: entity
title: "Inspection"
---

# Inspection

Subject: [Quality and Inspection](../README.md). ABE: [Quality Plan](README.md).

Also known as: Inspection (Crane Rental).

## Definition and detail

A controlled evaluation of material, process, output, equipment, or environment.

Logical attributes: Inspection Identifier; Inspection Type; Status; Inspected At; Inspector; Source; Sample Size; Result; Quality Plan Version.

### In industries

- **Inspection** (Crane Rental): A documented examination of Equipment, Component, configuration, setup, or work condition. Attributes: Inspection Identifier; Inspection Type; Inspection Status; Inspected At; Inspector; Asset or Component; Job Order; Result; Finding Count; Document Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#inspection) | Inspection |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#inspection) | Inspection |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Asset or Setup (review) | receives | Inspection | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Inspection | contains | [Inspection Finding](inspection-result.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Production Output](../../production/production-run/production-output.md) | receives | Inspection | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Inspection | contains | [Inspection Result](inspection-result.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
