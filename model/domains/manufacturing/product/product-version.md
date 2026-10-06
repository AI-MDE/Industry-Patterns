---
type: entity
title: "Product Version"
---

# Product Version

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

An effective version or revision of a Product definition.

Logical attributes: Product Version Identifier; Revision; Status; Effective From; Effective Through; Release Date; Superseded By.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#product-version) | Product Version |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | has | [Product Version](product-version.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Product Version](product-version.md) | has | [Product Specification](product-specification.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Product Version](product-version.md) | governed by | Bill of Material and Routing (review) | 1:M versions | [manufacturing](../../../../patterns/manufacturing.md) |
