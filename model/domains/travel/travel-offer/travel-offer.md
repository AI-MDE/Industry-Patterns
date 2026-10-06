---
type: primary-entity
title: "Travel Offer"
---

# Travel Offer

Domain: [Travel](../README.md). ABE: [Travel Offer](README.md).

Specializes: [Offering](../../product-and-service/product/offering.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A time-bounded commercial proposal for one or more travel services.

Logical attributes: Offer Identifier; Offer Status; Created At; Expires At; Currency; Total Price; Channel; Supplier; Customer Segment; Offer Source.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#travel-offer) | Travel Offer |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Offer](travel-offer.md) | contains | [Offer Item](offer-item.md) | 1:M | [travel](../../../../patterns/travel.md) |
