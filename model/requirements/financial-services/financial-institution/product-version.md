---
type: entity
title: "Product Version"
---

# Product Version

Domain: [Financial Services](../README.md). ABE: [Financial Institution](README.md).

## Definition and detail

A versioned set of eligibility, terms, rates, fees, limits, disclosures, accounting rules, and servicing behavior.

Logical attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#product-version) | Product Version |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Product](financial-product.md) | has | [Product Version](product-version.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Financial Offering](financial-offering.md) | makes available | [Product Version](product-version.md) | M:1 | [financial-services](../../../../patterns/financial-services.md) |
