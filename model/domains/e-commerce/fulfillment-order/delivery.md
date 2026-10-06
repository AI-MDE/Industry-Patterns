---
type: entity
title: "Delivery"
---

# Delivery

Domain: [E-Commerce](../README.md). ABE: [Fulfillment Order](README.md).

## Definition and detail

Evidence that fulfillment reached its destination or recipient.

Logical attributes: Delivery Identifier; Delivery Status; Delivered At; Recipient Name; Evidence Reference; Exception Reason.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#delivery) | Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Shipment](shipment.md) | results in | [Delivery](delivery.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
