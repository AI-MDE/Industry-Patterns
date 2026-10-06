---
type: entity
title: "Adjustment"
---

# Adjustment

Domain: [Financial Services](../README.md). ABE: [Statement](README.md).

## Definition and detail

An authorized correction or compensating Transaction that preserves the original record.

Logical attributes: Adjustment Identifier; Adjustment Type; Status; Requested Date; Approved Date; Amount; Currency; Reason; Original Transaction; Resulting Transaction.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#adjustment) | Adjustment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Dispute](dispute.md) | may produce | [Adjustment](adjustment.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
