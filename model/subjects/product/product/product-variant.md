---
type: entity
title: "Product Variant"
---

# Product Variant

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Product](README.md).

## Definition and detail

A sellable variation of a Product distinguished by selected characteristics.

Logical attributes: Variant Identifier; SKU; Variant Name; Variant Status; Barcode; Weight; Dimensions; Effective From; Effective Through.

Examples: size, color, capacity, format, license tier, or package size.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#product-variant) | Product Variant |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product](product.md) | has | Product Variant | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Inventory Item](../../resource/inventory-item/inventory-item.md) | stocks | Product Variant | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
