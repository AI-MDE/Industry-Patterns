---
type: entity
title: "Booking Item"
---

# Booking Item

Subject: [Travel](../README.md). ABE: [Booking](README.md).

Specializes: [Order Line](../../request/order/order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

One purchased or confirmed travel component.

Logical attributes: Booking Item Identifier; Item Type; Item Status; Quantity; Description Snapshot; Service Date; Unit Price; Total Price; Supplier Confirmation Reference.

Rule: Booking Items preserve accepted service, price, rule, tax, and participant snapshots even when current Offers later change.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#booking-item) | Booking Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking](booking.md) | contains | Booking Item | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Booking Item | receives | [Traveler Assignment](../../../../industry-patterns/travel.md#concepts-applications-typically-add) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Booking Item | receives | [Supplier Confirmation](../../../../industry-patterns/travel.md#concepts-applications-typically-add) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Booking Item | issues | [Travel Document](../travel-document/travel-document.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
