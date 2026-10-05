---
type: entity
title: "Insurance Offering"
---

# Insurance Offering

Domain: [Insurance](../README.md). ABE: [Insurance Product](README.md).

Specializes: [Offering](../../product-and-service/product/offering.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Product Version made available through a Channel, Producer, market, or customer segment under stated eligibility and commercial conditions.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Customer Segment; Available From; Available Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#insurance-offering) | Insurance Offering |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Insurance Offering](insurance-offering.md) | makes available | [Product Version](product-version.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
