---
type: entity
title: "Charge"
---

# Charge

Domain: [Health Care](../README.md). ABE: [Coverage](README.md).

Specializes: [Charge](../../finance/invoice/charge.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A billable amount arising from a delivered service, supply, facility use, or adjustment.

Logical attributes: Charge Identifier; Charge Code; Charge Type; Charge Status; Service Date; Quantity; Unit Price; Amount; Currency; Source reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#charge) | Charge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Delivery](../health-care-service/service-delivery.md) | produces | [Charge](charge.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
