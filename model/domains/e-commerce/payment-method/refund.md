---
type: entity
title: "Refund"
---

# Refund

Domain: [E-Commerce](../README.md). ABE: [Payment Method](README.md).

## Definition and detail

A transfer of value back to a Customer or Payer.

Logical attributes: Refund Identifier; Refund Reference; Refund Amount; Currency; Refund Reason; Refund Status; Requested At; Completed At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#refund) | Refund |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Return](../cancellation/return.md) | may cause | [Refund](refund.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
