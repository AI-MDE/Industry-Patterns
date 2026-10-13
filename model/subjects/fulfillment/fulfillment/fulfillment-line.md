---
type: entity
title: "Fulfillment Line"
---

# Fulfillment Line

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

## Definition and detail

The quantity of an Order Line assigned to a Fulfillment Order.

Logical attributes: Fulfillment Line Identifier; Quantity Assigned; Quantity Fulfilled; Fulfillment Line Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#fulfillment-line) | Fulfillment Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Fulfillment Order](fulfillment-order.md) | contains | Fulfillment Line | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Fulfillment Line | satisfies | [Order Line](../../request/order/order-line.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Shipment Item](shipment-item.md) | fulfills | Fulfillment Line | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
