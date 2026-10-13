---
type: entity
title: "Shipment Item"
---

# Shipment Item

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

## Definition and detail

The quantity of a Fulfillment Line placed in a Shipment.

Logical attributes: Shipment Item Identifier; Quantity Shipped; Package reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#shipment-item) | Shipment Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Shipment](shipment.md) | contains | Shipment Item | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Shipment Item | fulfills | [Fulfillment Line](fulfillment-line.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
