---
type: entity
title: "Fulfillment Order"
---

# Fulfillment Order

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

## Definition and detail

Instructions to a fulfillment location or provider to satisfy one or more Order Lines.

Logical attributes: Fulfillment Order Identifier; Fulfillment Type; Fulfillment Status; Source Location; Planned Date; Released At; Completed At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#fulfillment-order) | Fulfillment Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](../../request/order/order.md) | releases | Fulfillment Order | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Fulfillment Order | contains | [Fulfillment Line](fulfillment-line.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
