---
type: entity
title: "Catalog"
---

# Catalog

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

## Definition and detail

A governed collection of Offerings available for a market, channel, customer segment, or time period.

Logical attributes: Catalog Identifier; Catalog Name; Catalog Type; Catalog Status; Market; Currency; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#catalog) | Catalog |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Channel](channel.md) | presents | Catalog | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Catalog | contains | [Category](../../../../industry-patterns/e-commerce.md#concepts-applications-typically-add) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Catalog | publishes | [Offering](offering.md) | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
