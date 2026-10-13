---
type: entity
title: "Offer Item"
---

# Offer Item

Subject: [Travel](../README.md). ABE: [Booking](README.md).

## Definition and detail

One priced travel service, package component, or ancillary within an Offer.

Logical attributes: Offer Item Identifier; Item Type; Quantity; Unit Price; Total Price; Service Instance; Fare or Rate; Conditions Summary.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#offer-item) | Offer Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Offer](../../product/offering/offering.md) | contains | Offer Item | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Offer Item | proposes | Service Instance or Ancillary Service (review) | M:1 | [travel](../../../../industry-patterns/travel.md) |
| [Fare or Rate](../../product/offering/price.md) | prices | Offer Item | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Offer Item | contains | [Price Component](../../product/offering/price-component.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
