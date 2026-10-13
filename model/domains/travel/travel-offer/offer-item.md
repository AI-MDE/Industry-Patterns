---
type: entity
title: "Offer Item"
---

# Offer Item

Domain: [Travel](../README.md). ABE: [Travel Offer](README.md).

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
| [Travel Offer](travel-offer.md) | contains | [Offer Item](offer-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| [Offer Item](offer-item.md) | proposes | Service Instance or Ancillary Service (review) | M:1 | [travel](../../../../industry-patterns/travel.md) |
| [Fare or Rate](fare-or-rate.md) | prices | [Offer Item](offer-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
| [Offer Item](offer-item.md) | contains | [Price Component](price-component.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
