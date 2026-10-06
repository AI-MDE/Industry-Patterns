---
type: entity
title: "Order Address"
---

# Order Address

Domain: [E-Commerce](../README.md). ABE: [Order](README.md).

## Definition and detail

An immutable address snapshot used for billing, shipping, pickup, or service delivery.

Logical attributes: Order Address Identifier; Address Purpose; Recipient Name; Address Lines; City; Region; Postal Code; Country; Phone Number.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#order-address) | Order Address |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | uses | [Order Address](order-address.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
