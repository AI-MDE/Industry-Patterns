---
type: entity
title: "Rated Usage"
---

# Rated Usage

Domain: [Telecommunications](../README.md). ABE: [Usage Event](README.md).

## Definition and detail

A rated result derived from one or more Mediation Records.

Logical attributes: Rated Usage Identifier; Service; Billing Account; Usage Period; Quantity; Unit; Rate; Amount; Currency; Rating Rule Version; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#rated-usage) | Rated Usage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Mediation Record](mediation-record.md) | produces | [Rated Usage](rated-usage.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Rated Usage](rated-usage.md) | produces | [Charge](charge.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
