---
type: entity
title: "Cart"
---

# Cart

Domain: [E-Commerce](../README.md). ABE: [Shopping Session](README.md).

## Definition and detail

A mutable collection of intended purchases before

Logical attributes: Cart Identifier; Cart Status; Created At; Updated At; Currency; Customer reference; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#cart) | Cart |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | owns | [Cart](cart.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Cart](cart.md) | contains | [Cart Line](cart-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Cart](cart.md) | converts to | [Order](../order/order.md) | 1:0..1 | [e-commerce](../../../../patterns/e-commerce.md) |
