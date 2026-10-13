---
type: entity
title: "Price Component"
---

# Price Component

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

## Definition and detail

A base amount, tax, fee, surcharge, discount, commission, markup, or other explainable component of a price.

Logical attributes: Price Component Identifier; Component Type; Description; Amount; Currency; Jurisdiction; Source; Refundable Indicator.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#price-component) | Price Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Offer Item](../../travel/booking/offer-item.md) | contains | Price Component | 1:M | [travel](../../../../industry-patterns/travel.md) |
