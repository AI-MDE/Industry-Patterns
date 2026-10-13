---
type: entity
title: "Booking"
---

# Booking

Domain: [Travel](../README.md). ABE: [Reservation](README.md).

## Definition and detail

The durable commercial and servicing record accepted by the seller or Supplier.

Logical attributes: Booking Identifier; Booking Reference; Booking Status; Booked At; Channel; Currency; Total Amount; Customer; Servicing Party.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#booking) | Booking |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Offer or Reservation (review) | produces | [Booking](booking.md) | 1:0..1 | [travel](../../../../industry-patterns/travel.md) |
| [Booking](booking.md) | contains | [Booking Item](booking-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| [Booking](booking.md) | has | [Booking Party](booking-party.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| [Booking](booking.md) | receives | [Payment](../../finance/invoice/payment.md) | M:M through Payment Allocation | [travel](../../../../industry-patterns/travel.md) |
