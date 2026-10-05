---
type: entity
title: "Catalog"
---

# Catalog

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

## Definition and detail

A governed collection of Offerings available for a market, channel, customer segment, or time period.

Logical attributes: Catalog Identifier; Catalog Name; Catalog Type; Catalog Status; Market; Currency; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#catalog) | Catalog |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Channel](channel.md) | presents | [Catalog](catalog.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Catalog](catalog.md) | contains | [Category](category.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Catalog](catalog.md) | publishes | [Offering](offering.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
