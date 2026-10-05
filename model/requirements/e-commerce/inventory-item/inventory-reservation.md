---
type: entity
title: "Inventory Reservation"
---

# Inventory Reservation

Domain: [E-Commerce](../README.md). ABE: [Inventory Item](README.md).

## Definition and detail

A time-bounded hold of inventory for a Cart, Order Line, or Fulfillment Order.

Logical attributes: Reservation Identifier; Reserved Quantity; Reservation Status; Reserved At; Expires At; Released At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#inventory-reservation) | Inventory Reservation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Inventory Reservation](inventory-reservation.md) | reserves | [Inventory Item](inventory-item.md) | M:1 | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order Line](../order/order-line.md) | receives | [Inventory Reservation](inventory-reservation.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
