---
type: entity
title: "Mediation Record"
---

# Mediation Record

Domain: [Telecommunications](../README.md). ABE: [Usage Event](README.md).

## Definition and detail

A normalized, validated, enriched, correlated, or aggregated usage record.

Logical attributes: Mediation Record Identifier; Usage Event; Mediation Status; Processed At; Service; Customer; Quantity; Unit; Duplicate Status; Error Reason.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#mediation-record) | Mediation Record |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Usage Event](usage-event.md) | produces | [Mediation Record](mediation-record.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Mediation Record](mediation-record.md) | produces | [Rated Usage](rated-usage.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
