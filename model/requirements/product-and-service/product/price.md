---
type: entity
title: "Price"
---

# Price

Domain: [Product and Service](../README.md). ABE: [Product](README.md).

## Definition and detail

A monetary charge applicable to an Offering under stated conditions.

Logical attributes: Price Identifier; Price Type; Amount; Currency; Unit of Measure; Effective From; Effective Through.

## E-Commerce context

A monetary amount applicable to an Offering under stated conditions.

Logical attributes: Price Identifier; Price Type; Amount; Currency; Unit of Measure; Minimum Quantity; Customer Segment; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#price) | Price |
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#price) | Price |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Offering](offering.md) | has | [Price](price.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Offering](../../e-commerce/channel/offering.md) | has | [Price](price.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
