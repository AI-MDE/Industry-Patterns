---
type: entity
title: "Payment Authorization"
---

# Payment Authorization

Subject: [Billing and Payments](../README.md). ABE: [Payment](README.md).

Also known as: Payment Authorization (Travel).

## Definition and detail

Approval by a Payment Provider to reserve spending capacity.

Logical attributes: Authorization Identifier; Provider Reference; Requested Amount; Authorized Amount; Currency; Authorization Status; Authorized At; Expires At.

### In industries

- **Payment Authorization** (Travel): Approval to reserve spending capacity for a Booking or change. Attributes: Authorization Identifier; Provider Reference; Amount; Currency; Authorization Status; Authorized At; Expires At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#payment-authorization) | Payment Authorization |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#payment-authorization) | Payment Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](../../request/order/order.md) | receives | Payment Authorization | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Payment Authorization | may produce | [Payment](payment.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
