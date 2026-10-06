---
type: entity
title: "Disruption"
---

# Disruption

Domain: [Travel](../README.md). ABE: [Change Request](README.md).

## Definition and detail

An operational event that prevents or materially changes planned travel.

Logical attributes: Disruption Identifier; Disruption Type; Disruption Status; Detected At; Supplier; Affected Service Instances; Severity; Description.

Examples: delay, cancellation, missed connection, closure, overbooking, equipment change, property unavailable, or force majeure.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#disruption) | Disruption |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Disruption](disruption.md) | affects | [Service Instance](../travel-product/service-instance.md) | M:M | [travel](../../../../patterns/travel.md) |
| [Disruption](disruption.md) | may produce | Reaccommodation or Duty of Care Case (review) | 1:M | [travel](../../../../patterns/travel.md) |
