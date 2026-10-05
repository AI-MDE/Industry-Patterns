---
type: entity
title: "Charge"
---

# Charge

Domain: [Finance](../README.md). ABE: [Invoice](README.md).

## Definition and detail

An amount a Party is expected to pay because of a Product, Service, Usage, Event, Fee, Penalty, Tax, or Adjustment.

Logical attributes: Charge Identifier; Charge Type; Charge Date; Amount; Currency; Charge Status; Source Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#charge) | Charge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Charge](charge.md) | may arise from | Order Line, Usage, Fulfillment, or Event (review) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
| [Invoice Line](invoice-line.md) | explains | [Charge](charge.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
