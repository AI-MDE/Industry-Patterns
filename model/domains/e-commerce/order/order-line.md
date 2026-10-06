---
type: entity
title: "Order Line"
---

# Order Line

Domain: [E-Commerce](../README.md). ABE: [Order](README.md).

Specializes: [Order Line](../../request-and-fulfillment/request/order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An immutable commercial record of one ordered Offering.

Logical attributes: Order Line Identifier; Line Number; Product Name Snapshot; SKU Snapshot; Quantity Ordered; Unit Price; Discount Amount; Tax Amount; Line Total; Line Status; Requested Fulfillment Method.

Rule: retain product, description, price, tax, and promotion snapshots needed to explain the accepted Order even when the current Catalog later changes.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#order-line) | Order Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | contains | [Order Line](order-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order Line](order-line.md) | snapshots | [Offering](../channel/offering.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order Line](order-line.md) | receives | [Inventory Reservation](../inventory-item/inventory-reservation.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Fulfillment Line](../fulfillment-order/fulfillment-line.md) | satisfies | [Order Line](order-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Return Line](../cancellation/return-line.md) | refers to | [Order Line](order-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
