---
type: entity
title: "Traveler Assignment"
---

# Traveler Assignment

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

Assignment of a Traveler to a Booking Item, Segment, seat, room, vehicle, or ancillary.

Logical attributes: Assignment Identifier; Assignment Type; Assignment Status; Traveler; Booking Item; Service Preference; Confirmation Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#traveler-assignment) | Traveler Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking Item](booking-item.md) | receives | [Traveler Assignment](traveler-assignment.md) | 1:M | [travel](../../../../patterns/travel.md) |
