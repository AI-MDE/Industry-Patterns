---
type: primary-entity
title: "Travel Document"
---

# Travel Document

Domain: [Travel](../README.md). ABE: [Travel Document](README.md).

## Definition and detail

A ticket, voucher, confirmation, pass, coupon, certificate, or other evidence of entitlement.

Logical attributes: Travel Document Identifier; Document Type; Document Number; Document Status; Issued At; Issuer; Valid From; Valid Through; Holder; Booking Item.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#travel-document) | Travel Document |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Booking Item](../reservation/booking-item.md) | issues | [Travel Document](travel-document.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Travel Document](travel-document.md) | authorizes | [Fulfillment](fulfillment.md) | 1:M | [travel](../../../../patterns/travel.md) |
