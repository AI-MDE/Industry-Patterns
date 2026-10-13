---
type: entity
title: "Insurance Product"
---

# Insurance Product

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Insurance Product](README.md).

Specializes: [Product](../../product/product/product.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A governed definition of insurance protection offered for a line of business and market.

Logical attributes: Product Identifier; Product Name; Product Type; Line of Business; Product Status; Jurisdiction; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#insurance-product) | Insurance Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Insurer (review) | defines | Insurance Product | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Insurance Product | has | [Product Version](../../product/product/product-version.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
