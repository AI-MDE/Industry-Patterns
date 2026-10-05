---
type: entity
title: "Product Variant"
---

# Product Variant

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

## Definition and detail

A sellable variation of a Product distinguished by selected characteristics.

Logical attributes: Variant Identifier; SKU; Variant Name; Variant Status; Barcode; Weight; Dimensions; Effective From; Effective Through.

Examples: size, color, capacity, format, license tier, or package size.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#product-variant) | Product Variant |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | has | [Product Variant](product-variant.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Inventory Item](../inventory-item/inventory-item.md) | stocks | [Product Variant](product-variant.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
