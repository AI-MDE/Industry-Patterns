---
type: entity
title: "Product Order Item"
---

# Product Order Item

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Quote](README.md).

Specializes: [Order Line](../../request-and-fulfillment/request/order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An order line concerning a Product Offering or Subscription action.

Logical attributes: Order Item Identifier; Action; Status; Offering; Quantity; Subscription; Requested Start; Requested Characteristics; Parent Item.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#product-order-item) | Product Order Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Order](product-order.md) | contains | [Product Order Item](product-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Product Order Item](product-order-item.md) | decomposes into | [Service Order Item](service-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
