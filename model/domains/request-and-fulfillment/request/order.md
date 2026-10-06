---
type: entity
title: "Order"
---

# Order

Domain: [Request and Fulfillment](../README.md). ABE: [Request](README.md).

## Definition and detail

An authorized request to supply Products or Services under commercial or operational terms.

Logical attributes: Order Identifier; Order Number; Order Type; Order Status; Order Date; Required Date; Currency; Total Amount.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#order) | Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Request](request.md) | may become | [Order](order.md) | 1:0..1 | [cross-industry](../../../../patterns/cross-industry.md) |
| [Order](order.md) | contains | [Order Line](order-line.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
