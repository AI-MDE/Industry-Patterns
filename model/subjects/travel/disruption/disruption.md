---
type: entity
title: "Disruption"
---

# Disruption

Subject: [Travel](../README.md). ABE: [Disruption](README.md).

## Definition and detail

An operational event that prevents or materially changes planned travel.

Logical attributes: Disruption Identifier; Disruption Type; Disruption Status; Detected At; Supplier; Affected Service Instances; Severity; Description.

Examples: delay, cancellation, missed connection, closure, overbooking, equipment change, property unavailable, or force majeure.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#disruption) | Disruption |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Disruption | affects | [Service Instance](../scheduled-service/scheduled-service.md) | M:M | [travel](../../../../industry-patterns/travel.md) |
| Disruption | may produce | Reaccommodation or Duty of Care Case (review) | 1:M | [travel](../../../../industry-patterns/travel.md) |
