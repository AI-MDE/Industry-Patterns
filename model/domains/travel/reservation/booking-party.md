---
type: entity
title: "Booking Party"
---

# Booking Party

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

A Party participating in a Booking in a stated role.

Logical attributes: Booking Party Identifier; Role Type; Role Status; Effective From; Effective Through; Contact Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#booking-party) | Booking Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking](booking.md) | has | [Booking Party](booking-party.md) | 1:M | [travel](../../../../patterns/travel.md) |
