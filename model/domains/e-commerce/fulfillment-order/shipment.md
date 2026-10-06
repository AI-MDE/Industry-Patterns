---
type: entity
title: "Shipment"
---

# Shipment

Domain: [E-Commerce](../README.md). ABE: [Fulfillment Order](README.md).

## Definition and detail

A physical dispatch from a fulfillment location to a destination.

Logical attributes: Shipment Identifier; Shipment Number; Shipment Status; Ship Date; Carrier; Service Level; Tracking Number; Estimated Delivery Date; Actual Delivery Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#shipment) | Shipment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Shipment](shipment.md) | contains | [Shipment Item](shipment-item.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Shipment](shipment.md) | results in | [Delivery](delivery.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
