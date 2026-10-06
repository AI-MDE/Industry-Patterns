---
type: entity
title: "Settlement"
---

# Settlement

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

The discharge of financial obligations between participating Parties or institutions.

Logical attributes: Settlement Identifier; Settlement Type; Settlement Status; Settlement Date; Amount; Currency; Settlement Account; Scheme; Finality Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#settlement) | Settlement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Clearing Item](clearing-item.md) | resolves through | [Settlement](settlement.md) | M:1 | [financial-services](../../../../patterns/financial-services.md) |
