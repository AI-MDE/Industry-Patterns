---
type: entity
title: "Financial Offering"
---

# Financial Offering

Domain: [Financial Services](../README.md). ABE: [Financial Institution](README.md).

Specializes: [Offering](../../product-and-service/product/offering.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Product Version made available through a channel, market, region, or customer segment under stated commercial conditions.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Customer Segment; Available From; Available Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-offering) | Financial Offering |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Offering](financial-offering.md) | makes available | [Product Version](product-version.md) | M:1 | [financial-services](../../../../patterns/financial-services.md) |
