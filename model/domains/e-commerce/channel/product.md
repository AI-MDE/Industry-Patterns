---
type: entity
title: "Product"
---

# Product

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

Specializes: [Product](../../product-and-service/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The stable definition of a good, digital item, bundle, subscription, or service.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Brand; Description; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#product) | Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | has | [Product Variant](product-variant.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
