---
type: entity
title: "Coverage Definition"
---

# Coverage Definition

Domain: [Insurance](../README.md). ABE: [Insurance Product](README.md).

## Definition and detail

A reusable product-level definition of a type of protection.

Logical attributes: Coverage Definition Identifier; Coverage Code; Coverage Name; Coverage Type; Required Indicator; Default Limit; Default Deductible; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#coverage-definition) | Coverage Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Version](product-version.md) | contains | [Coverage Definition](coverage-definition.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Coverage](../policy/coverage.md) | derives from | [Coverage Definition](coverage-definition.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
