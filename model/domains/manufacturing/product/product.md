---
type: primary-entity
title: "Product"
---

# Product

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

Specializes: [Product](../../product-and-service/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A governed definition of an item manufactured, sold, installed, consumed, or serviced.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Product Family; Make/Buy Policy; Lifecycle Phase.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#product) | Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | has | [Product Version](product-version.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
