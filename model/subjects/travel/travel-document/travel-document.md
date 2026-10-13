---
type: entity
title: "Travel Document"
---

# Travel Document

Subject: [Travel](../README.md). ABE: [Travel Document](README.md).

## Definition and detail

A ticket, voucher, confirmation, pass, coupon, certificate, or other evidence of entitlement.

Logical attributes: Travel Document Identifier; Document Type; Document Number; Document Status; Issued At; Issuer; Valid From; Valid Through; Holder; Booking Item.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#travel-document) | Travel Document |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking Item](../booking/booking-item.md) | issues | Travel Document | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Travel Document | authorizes | [Fulfillment](../../fulfillment/fulfillment/fulfillment.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
