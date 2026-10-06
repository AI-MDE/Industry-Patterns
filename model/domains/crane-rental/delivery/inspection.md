---
type: entity
title: "Inspection"
---

# Inspection

Domain: [Crane Rental](../README.md). ABE: [Delivery](README.md).

## Definition and detail

A documented examination of Equipment, Component, configuration, setup, or work condition.

Logical attributes: Inspection Identifier; Inspection Type; Inspection Status; Inspected At; Inspector; Asset or Component; Job Order; Result; Finding Count; Document Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#inspection) | Inspection |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Asset or Setup (review) | receives | [Inspection](inspection.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Inspection](inspection.md) | contains | [Inspection Finding](inspection-finding.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
