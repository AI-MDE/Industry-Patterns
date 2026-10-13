---
type: entity
title: "Inventory Item"
---

# Inventory Item

Subject: [Resources and Assets](../README.md). ABE: [Inventory Item](README.md).

Also known as: Inventory Item (E-Commerce).

## Definition and detail

A controlled stock identity for a Part at a location, status, lot, serial, or ownership dimension.

Logical attributes: Inventory Item Identifier; Part Revision; Facility; Location; Lot; Serial; Inventory Status; Ownership; Quantity; Unit.

### In industries

- **Inventory Item** (E-Commerce): Stock or capacity for a Product Variant at a fulfillment location. Attributes: Inventory Item Identifier; SKU; Location reference; Inventory Status; Quantity On Hand; Quantity Reserved; Quantity Available; Reorder Level; Updated At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#inventory-item) | Inventory Item |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#inventory-item) | Inventory Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Inventory Item | stocks | [Product Variant](../../product/product/product-variant.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Inventory Reservation](../../scheduling/reservation/reservation.md) | reserves | Inventory Item | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
