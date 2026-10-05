---
type: entity
title: "Fulfillment Line"
---

# Fulfillment Line

Domain: [E-Commerce](../README.md). ABE: [Fulfillment Order](README.md).

## Definition and detail

The quantity of an Order Line assigned to a Fulfillment Order.

Logical attributes: Fulfillment Line Identifier; Quantity Assigned; Quantity Fulfilled; Fulfillment Line Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#fulfillment-line) | Fulfillment Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Fulfillment Order](fulfillment-order.md) | contains | [Fulfillment Line](fulfillment-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Fulfillment Line](fulfillment-line.md) | satisfies | [Order Line](../order/order-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Shipment Item](shipment-item.md) | fulfills | [Fulfillment Line](fulfillment-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
