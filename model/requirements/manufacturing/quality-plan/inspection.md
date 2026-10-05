---
type: entity
title: "Inspection"
---

# Inspection

Domain: [Manufacturing](../README.md). ABE: [Quality Plan](README.md).

## Definition and detail

A controlled evaluation of material, process, output, equipment, or environment.

Logical attributes: Inspection Identifier; Inspection Type; Status; Inspected At; Inspector; Source; Sample Size; Result; Quality Plan Version.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#inspection) | Inspection |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Production Output](../production-run/production-output.md) | receives | [Inspection](inspection.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Inspection](inspection.md) | contains | [Inspection Result](inspection-result.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
