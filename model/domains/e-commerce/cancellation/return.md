---
type: entity
title: "Return"
---

# Return

Domain: [E-Commerce](../README.md). ABE: [Cancellation](README.md).

## Definition and detail

Authorization and tracking for goods or value being returned after fulfillment.

Logical attributes: Return Identifier; Return Number; Return Status; Requested At; Authorized At; Received At; Return Method; Return Reason.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#return) | Return |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](../order/order.md) | receives | [Return](return.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Return](return.md) | contains | [Return Line](return-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Return](return.md) | may cause | [Refund](../payment-method/refund.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
