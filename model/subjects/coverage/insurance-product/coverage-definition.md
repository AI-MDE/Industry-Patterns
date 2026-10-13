---
type: entity
title: "Coverage Definition"
---

# Coverage Definition

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Insurance Product](README.md).

## Definition and detail

A reusable product-level definition of a type of protection.

Logical attributes: Coverage Definition Identifier; Coverage Code; Coverage Name; Coverage Type; Required Indicator; Default Limit; Default Deductible; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#coverage-definition) | Coverage Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Version](../../product/product/product-version.md) | contains | Coverage Definition | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Coverage](../coverage/coverage.md) | derives from | Coverage Definition | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
