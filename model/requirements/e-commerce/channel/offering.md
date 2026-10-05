---
type: entity
title: "Offering"
---

# Offering

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

Specializes: [Offering](../../product-and-service/product/offering.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Product or Product Variant made available through a Channel under specified commercial conditions.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Available From; Available Through; Minimum Quantity; Maximum Quantity; Market; Channel reference.

Rule: Product describes what something is; Offering describes how and where it can be acquired.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#offering) | Offering |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Category](category.md) | classifies | [Offering](offering.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Offering](offering.md) | offers | Product or Product Variant (review) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Catalog](catalog.md) | publishes | [Offering](offering.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Offering](offering.md) | has | [Price](../../product-and-service/product/price.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Cart Line](../shopping-session/cart-line.md) | selects | [Offering](offering.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order Line](../order/order-line.md) | snapshots | [Offering](offering.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
