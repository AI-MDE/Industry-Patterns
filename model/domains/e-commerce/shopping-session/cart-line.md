---
type: entity
title: "Cart Line"
---

# Cart Line

Domain: [E-Commerce](../README.md). ABE: [Shopping Session](README.md).

## Definition and detail

A requested quantity of an Offering in a Cart.

Logical attributes: Cart Line Identifier; Quantity; Selected Unit Price; Estimated Discount; Estimated Tax; Estimated Total; Added At.

Rule: cart price, availability, tax, and delivery values are estimates until checkout validates them.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#cart-line) | Cart Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Cart](cart.md) | contains | [Cart Line](cart-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Cart Line](cart-line.md) | selects | [Offering](../channel/offering.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
