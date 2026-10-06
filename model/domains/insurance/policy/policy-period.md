---
type: entity
title: "Policy Period"
---

# Policy Period

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

## Definition and detail

A bounded period during which a Policy's terms apply.

Logical attributes: Policy Period Identifier; Period Number; Start Date; End Date; Period Status; Transaction Effective Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#policy-period) | Policy Period |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy](policy.md) | contains | [Policy Period](policy-period.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
