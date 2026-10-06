---
type: entity
title: "Charge"
---

# Charge

Domain: [Telecommunications](../README.md). ABE: [Usage Event](README.md).

Specializes: [Charge](../../finance/invoice/charge.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A one-time, recurring, usage, adjustment, penalty, credit, tax, or discount amount.

Logical attributes: Charge Identifier; Charge Type; Charge Status; Billing Account; Service or Subscription; Charge Date; Period; Amount; Currency; Source.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#charge) | Charge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Rated Usage](rated-usage.md) | produces | [Charge](charge.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
