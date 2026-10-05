---
type: primary-entity
title: "Fulfillment Order"
---

# Fulfillment Order

Domain: [E-Commerce](../README.md). ABE: [Fulfillment Order](README.md).

## Definition and detail

Instructions to a fulfillment location or provider to satisfy one or more Order Lines.

Logical attributes: Fulfillment Order Identifier; Fulfillment Type; Fulfillment Status; Source Location; Planned Date; Released At; Completed At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#fulfillment-order) | Fulfillment Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](../order/order.md) | releases | [Fulfillment Order](fulfillment-order.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Fulfillment Order](fulfillment-order.md) | contains | [Fulfillment Line](fulfillment-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
