---
type: entity
title: "Channel"
---

# Channel

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

## Definition and detail

A customer-facing context through which Offerings are presented or sold.

Logical attributes: Channel Identifier; Channel Name; Channel Type; Channel Status; Locale; Default Currency; Effective From; Effective Through.

Examples: website, mobile application, marketplace, call center, social storefront, or physical point of sale.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#channel) | Channel |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Merchant (review) | operates | Channel | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Channel | presents | [Catalog](catalog.md) | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
