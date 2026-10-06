---
type: entity
title: "Shipment Item"
---

# Shipment Item

Domain: [E-Commerce](../README.md). ABE: [Fulfillment Order](README.md).

## Definition and detail

The quantity of a Fulfillment Line placed in a Shipment.

Logical attributes: Shipment Item Identifier; Quantity Shipped; Package reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#shipment-item) | Shipment Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Shipment](shipment.md) | contains | [Shipment Item](shipment-item.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Shipment Item](shipment-item.md) | fulfills | [Fulfillment Line](fulfillment-line.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
