---
type: entity
title: "Promotion"
---

# Promotion

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

## Definition and detail

A governed offer that may create a discount, benefit, free item, shipping adjustment, or other reward when its eligibility conditions are satisfied.

Logical attributes: Promotion Identifier; Promotion Code; Promotion Name; Promotion Type; Promotion Status; Start Date; End Date; Eligibility Rule reference; Benefit Rule reference; Usage Limit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#promotion) | Promotion |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Promotion](promotion.md) | applies to | Offering, Cart, Order, or Order Line (review) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
