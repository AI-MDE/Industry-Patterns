---
type: entity
title: "Supplier Confirmation"
---

# Supplier Confirmation

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

Evidence that a Supplier accepted or confirmed a Reservation or Booking Item.

Logical attributes: Confirmation Identifier; Supplier Reference; Confirmation Status; Confirmed At; Source; Conditions.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#supplier-confirmation) | Supplier Confirmation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking Item](booking-item.md) | receives | [Supplier Confirmation](supplier-confirmation.md) | 1:M | [travel](../../../../patterns/travel.md) |
