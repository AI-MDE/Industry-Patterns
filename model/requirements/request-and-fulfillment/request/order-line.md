---
type: entity
title: "Order Line"
---

# Order Line

Domain: [Request and Fulfillment](../README.md). ABE: [Request](README.md).

## Definition and detail

One requested Product, Service, or chargeable unit within an Order.

Logical attributes: Order Line Identifier; Line Number; Quantity; Unit of Measure; Unit Price; Line Amount; Line Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#order-line) | Order Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | contains | [Order Line](order-line.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Order Line](order-line.md) | requests | [Offering](../../product-and-service/product/offering.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
