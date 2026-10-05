---
type: entity
title: "Offering"
---

# Offering

Domain: [Product and Service](../README.md). ABE: [Product](README.md).

## Definition and detail

A market- or context-specific way a Product or Service is made available.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Available From; Available Through; Market; Channel.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#offering) | Offering |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Offering](offering.md) | makes available | Product or Service (review) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
| [Offering](offering.md) | has | [Price](price.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Order Line](../../request-and-fulfillment/request/order-line.md) | requests | [Offering](offering.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
