---
type: entity
title: "Financial Product"
---

# Financial Product

Domain: [Financial Services](../README.md). ABE: [Financial Institution](README.md).

Specializes: [Product](../../product-and-service/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A governed definition of a deposit, payment, credit, investment, custody, foreign-exchange, or other financial service.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Currency Policy; Customer Segment; Jurisdiction; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-product) | Financial Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Institution](financial-institution.md) | defines | [Financial Product](financial-product.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Financial Product](financial-product.md) | has | [Product Version](product-version.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
