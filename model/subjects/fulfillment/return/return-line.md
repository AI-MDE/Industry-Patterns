---
type: entity
title: "Return Line"
---

# Return Line

Subject: [Fulfillment and Logistics](../README.md). ABE: [Return](README.md).

## Definition and detail

A quantity from an Order Line included in a Return.

Logical attributes: Return Line Identifier; Requested Quantity; Authorized Quantity; Received Quantity; Disposition; Condition.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#return-line) | Return Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Return](return.md) | contains | Return Line | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Return Line | refers to | [Order Line](../../request/order/order-line.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
