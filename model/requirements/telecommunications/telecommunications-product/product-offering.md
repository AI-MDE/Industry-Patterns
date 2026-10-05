---
type: entity
title: "Product Offering"
---

# Product Offering

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Product](README.md).

Specializes: [Offering](../../product-and-service/product/offering.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Product Version made available through a channel, market, geography, or customer segment at defined prices and terms.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Geography; Available From; Available Through; Price Plan.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#product-offering) | Product Offering |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Offering](product-offering.md) | offers | [Product Version](product-version.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
| [Subscription](../customer-account/subscription.md) | instantiates | [Product Offering](product-offering.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
