---
type: entity
title: "Fulfillment"
---

# Fulfillment

Domain: [Request and Fulfillment](../README.md). ABE: [Request](README.md).

## Definition and detail

The performance, delivery, shipment, activation, or provision that satisfies a Request, Order Line, Commitment, or Entitlement.

Logical attributes: Fulfillment Identifier; Fulfillment Type; Fulfillment Status; Planned Date; Actual Date; Quantity; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#fulfillment) | Fulfillment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Fulfillment](fulfillment.md) | satisfies | Order Line or Commitment (review) | M:M | [cross-industry](../../../../patterns/cross-industry.md) |
