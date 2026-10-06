---
type: entity
title: "Payment Authorization"
---

# Payment Authorization

Domain: [E-Commerce](../README.md). ABE: [Payment Method](README.md).

## Definition and detail

Approval by a Payment Provider to reserve spending capacity.

Logical attributes: Authorization Identifier; Provider Reference; Requested Amount; Authorized Amount; Currency; Authorization Status; Authorized At; Expires At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#payment-authorization) | Payment Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](../order/order.md) | receives | [Payment Authorization](payment-authorization.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Payment Authorization](payment-authorization.md) | may produce | [Payment](../../finance/invoice/payment.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
