---
type: primary-entity
title: "Product"
---

# Product

Domain: [Product and Service](../README.md). ABE: [Product](README.md).

## Definition and detail

Something an organization defines, supplies, sells, leases, licenses, or otherwise provides.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Description; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#product) | Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | contains | [Product](product.md) | M:M through Product Component | [cross-industry](../../../../patterns/cross-industry.md) |
