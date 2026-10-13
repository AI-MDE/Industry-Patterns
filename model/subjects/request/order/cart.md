---
type: entity
title: "Cart"
---

# Cart

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Specializes: [Request](../request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A mutable collection of intended purchases before

Logical attributes: Cart Identifier; Cart Status; Created At; Updated At; Currency; Customer reference; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#cart) | Cart |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | owns | Cart | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Cart | contains | [Cart Line](cart-line.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Cart | converts to | [Order](order.md) | 1:0..1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
