---
type: entity
title: "Reservation Item"
---

# Reservation Item

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

A held quantity or entitlement for one Service Instance, rate, room, seat, vehicle, or ancillary.

Logical attributes: Reservation Item Identifier; Item Type; Quantity; Hold Status; Service Instance; Fare or Rate; Traveler Assignment.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#reservation-item) | Reservation Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reservation](reservation.md) | contains | [Reservation Item](reservation-item.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Reservation Item](reservation-item.md) | holds | Service Instance inventory (review) | M:1 | [travel](../../../../patterns/travel.md) |
