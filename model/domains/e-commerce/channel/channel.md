---
type: primary-entity
title: "Channel"
---

# Channel

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

## Definition and detail

A customer-facing context through which Offerings are presented or sold.

Logical attributes: Channel Identifier; Channel Name; Channel Type; Channel Status; Locale; Default Currency; Effective From; Effective Through.

Examples: website, mobile application, marketplace, call center, social storefront, or physical point of sale.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#channel) | Channel |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Merchant (review) | operates | [Channel](channel.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Channel](channel.md) | presents | [Catalog](catalog.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
