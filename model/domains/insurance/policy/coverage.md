---
type: entity
title: "Coverage"
---

# Coverage

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

Specializes: [Entitlement](../../agreement/agreement/entitlement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Policy-level grant of protection derived from a Coverage Definition.

Logical attributes: Coverage Identifier; Coverage Code; Coverage Status; Effective From; Effective Through; Limit Amount; Deductible Amount; Coinsurance Percentage; Premium.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#coverage) | Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy](policy.md) | contains | [Coverage](coverage.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Coverage](coverage.md) | derives from | [Coverage Definition](../insurance-product/coverage-definition.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
| [Coverage](coverage.md) | has | Coverage Term or Exclusion (review) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim Exposure](../loss-event/claim-exposure.md) | evaluates | [Coverage](coverage.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
