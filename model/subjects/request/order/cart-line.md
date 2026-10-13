---
type: entity
title: "Cart Line"
---

# Cart Line

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Specializes: [Order Line](order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A requested quantity of an Offering in a Cart.

Logical attributes: Cart Line Identifier; Quantity; Selected Unit Price; Estimated Discount; Estimated Tax; Estimated Total; Added At.

Rule: cart price, availability, tax, and delivery values are estimates until checkout validates them.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#cart-line) | Cart Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Cart](cart.md) | contains | Cart Line | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Cart Line | selects | [Offering](../../product/offering/offering.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
