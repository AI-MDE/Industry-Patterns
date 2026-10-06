---
type: entity
title: "Price Component"
---

# Price Component

Domain: [Travel](../README.md). ABE: [Travel Offer](README.md).

## Definition and detail

A base amount, tax, fee, surcharge, discount, commission, markup, or other explainable component of a price.

Logical attributes: Price Component Identifier; Component Type; Description; Amount; Currency; Jurisdiction; Source; Refundable Indicator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#price-component) | Price Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Offer Item](offer-item.md) | contains | [Price Component](price-component.md) | 1:M | [travel](../../../../patterns/travel.md) |
