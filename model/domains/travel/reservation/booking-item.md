---
type: entity
title: "Booking Item"
---

# Booking Item

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

One purchased or confirmed travel component.

Logical attributes: Booking Item Identifier; Item Type; Item Status; Quantity; Description Snapshot; Service Date; Unit Price; Total Price; Supplier Confirmation Reference.

Rule: Booking Items preserve accepted service, price, rule, tax, and participant snapshots even when current Offers later change.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#booking-item) | Booking Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking](booking.md) | contains | [Booking Item](booking-item.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Booking Item](booking-item.md) | receives | [Traveler Assignment](traveler-assignment.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Booking Item](booking-item.md) | receives | [Supplier Confirmation](supplier-confirmation.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Booking Item](booking-item.md) | issues | [Travel Document](../travel-document/travel-document.md) | 1:M | [travel](../../../../patterns/travel.md) |
