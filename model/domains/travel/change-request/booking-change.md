---
type: entity
title: "Booking Change"
---

# Booking Change

Domain: [Travel](../README.md). ABE: [Change Request](README.md).

## Definition and detail

An accepted modification with commercial and fulfillment consequences.

Logical attributes: Booking Change Identifier; Change Type; Change Status; Effective At; Prior Item Reference; Resulting Item Reference; Additional Collection; Refund Amount; Penalty.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#booking-change) | Booking Change |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Change Request (review) | produces | [Booking Change](booking-change.md) | 1:1 | [travel](../../../../patterns/travel.md) |
