---
type: entity
title: "Product Version"
---

# Product Version

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Product](README.md).

## Definition and detail

A versioned definition of product components, eligibility, commercial terms, dependencies, and lifecycle actions.

Logical attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#product-version) | Product Version |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Telecommunications Product](telecommunications-product.md) | has | [Product Version](product-version.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Product Version](product-version.md) | contains | [Product Component](product-component.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Product Offering](product-offering.md) | offers | [Product Version](product-version.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
