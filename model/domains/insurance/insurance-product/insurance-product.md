---
type: primary-entity
title: "Insurance Product"
---

# Insurance Product

Domain: [Insurance](../README.md). ABE: [Insurance Product](README.md).

Specializes: [Product](../../product-and-service/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A governed definition of insurance protection offered for a line of business and market.

Logical attributes: Product Identifier; Product Name; Product Type; Line of Business; Product Status; Jurisdiction; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#insurance-product) | Insurance Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Insurer (review) | defines | [Insurance Product](insurance-product.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Insurance Product](insurance-product.md) | has | [Product Version](product-version.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
