---
type: entity
title: "Collateral"
---

# Collateral

Domain: [Financial Services](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

An asset or right supporting an obligation.

Logical attributes: Collateral Identifier; Collateral Type; Description; Owner; Valuation; Valuation Date; Currency; Lien Priority; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#collateral) | Collateral |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Credit obligation (review) | is supported by | [Collateral](collateral.md) | M:M | [financial-services](../../../../patterns/financial-services.md) |
