---
type: primary-entity
title: "Reservation"
---

# Reservation

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

A temporary or confirmed hold on supplier inventory before or as part of Booking.

Logical attributes: Reservation Identifier; Reservation Reference; Reservation Status; Created At; Expires At; Supplier; Source System.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#reservation) | Reservation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reservation](reservation.md) | contains | [Reservation Item](reservation-item.md) | 1:M | [travel](../../../../patterns/travel.md) |
