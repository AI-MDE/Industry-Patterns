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
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#fulfillment) | Fulfillment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Fulfillment](fulfillment.md) | satisfies | Order Line or Commitment (review) | M:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |

## Integrity rules

- Fulfilled quantity cannot exceed ordered quantity unless an explicit tolerance or change authorization permits it.
