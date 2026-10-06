---
type: entity
title: "Product Order"
---

# Product Order

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Quote](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Customer-facing request to add, change, move, suspend, resume, migrate, or terminate products.

Logical attributes: Product Order Identifier; Order Number; Order Type; Order Status; Requested Date; Requested Completion; Customer Account; Agreement; Channel; Priority.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#product-order) | Product Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Order](product-order.md) | contains | [Product Order Item](product-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
