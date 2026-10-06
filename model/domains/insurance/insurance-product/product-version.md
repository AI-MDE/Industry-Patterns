---
type: entity
title: "Product Version"
---

# Product Version

Domain: [Insurance](../README.md). ABE: [Insurance Product](README.md).

## Definition and detail

A versioned set of product terms, available Coverages, rules, forms, rating behavior, and underwriting requirements.

Logical attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#product-version) | Product Version |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Insurance Product](insurance-product.md) | has | [Product Version](product-version.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Product Version](product-version.md) | contains | [Coverage Definition](coverage-definition.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Insurance Offering](insurance-offering.md) | makes available | [Product Version](product-version.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
