---
type: primary-entity
title: "Inventory Item"
---

# Inventory Item

Domain: [E-Commerce](../README.md). ABE: [Inventory Item](README.md).

## Definition and detail

Stock or capacity for a Product Variant at a fulfillment location.

Logical attributes: Inventory Item Identifier; SKU; Location reference; Inventory Status; Quantity On Hand; Quantity Reserved; Quantity Available; Reorder Level; Updated At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#inventory-item) | Inventory Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Inventory Item](inventory-item.md) | stocks | [Product Variant](../channel/product-variant.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Inventory Reservation](inventory-reservation.md) | reserves | [Inventory Item](inventory-item.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
