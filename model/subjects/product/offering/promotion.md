---
type: entity
title: "Promotion"
---

# Promotion

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

## Definition and detail

A governed offer that may create a discount, benefit, free item, shipping adjustment, or other reward when its eligibility conditions are satisfied.

Logical attributes: Promotion Identifier; Promotion Code; Promotion Name; Promotion Type; Promotion Status; Start Date; End Date; Eligibility Rule reference; Benefit Rule reference; Usage Limit.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#promotion) | Promotion |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Promotion | applies to | Offering, Cart, Order, or Order Line (review) | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
