---
type: primary-entity
title: "Telecommunications Product"
---

# Telecommunications Product

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Product](README.md).

Specializes: [Product](../../product-and-service/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A governed commercial definition of connectivity, voice, messaging, data, media, managed network, device, or related service.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Market; Customer Segment; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#telecommunications-product) | Telecommunications Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Telecommunications Product](telecommunications-product.md) | has | [Product Version](product-version.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
