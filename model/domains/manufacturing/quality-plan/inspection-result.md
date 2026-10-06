---
type: entity
title: "Inspection Result"
---

# Inspection Result

Domain: [Manufacturing](../README.md). ABE: [Quality Plan](README.md).

## Definition and detail

A measured or classified result for one inspection characteristic.

Logical attributes: Result Identifier; Characteristic; Value; Unit; Lower Limit; Upper Limit; Conformance; Method; Evidence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#inspection-result) | Inspection Result |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Inspection](inspection.md) | contains | [Inspection Result](inspection-result.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
