---
type: entity
title: "Return Line"
---

# Return Line

Domain: [E-Commerce](../README.md). ABE: [Cancellation](README.md).

## Definition and detail

A quantity from an Order Line included in a Return.

Logical attributes: Return Line Identifier; Requested Quantity; Authorized Quantity; Received Quantity; Disposition; Condition.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#return-line) | Return Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Return](return.md) | contains | [Return Line](return-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Return Line](return-line.md) | refers to | [Order Line](../order/order-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
