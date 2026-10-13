---
type: entity
title: "Booking"
---

# Booking

Subject: [Travel](../README.md). ABE: [Booking](README.md).

Specializes: [Order](../../request/order/order.md). Inherit its meaning; apply the refinements below in this context.

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
| Accepted Offer or Reservation (review) | produces | Booking | 1:0..1 | [travel](../../../../industry-patterns/travel.md) |
| Booking | contains | [Booking Item](booking-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Booking | has | [Booking Party](../../party/party/party-role.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Booking | receives | [Payment](../../finance/payment/payment.md) | M:M through Payment Allocation | [travel](../../../../industry-patterns/travel.md) |
