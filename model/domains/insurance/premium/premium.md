---
type: primary-entity
title: "Premium"
---

# Premium

Domain: [Insurance](../README.md). ABE: [Premium](README.md).

## Definition and detail

The amount charged for assuming insurance risk for a Coverage, Policy Period, or transaction.

Logical attributes: Premium Identifier; Premium Type; Amount; Currency; Effective From; Effective Through; Rating Plan; Calculation Evidence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#premium) | Premium |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Coverage or Policy Period (review) | produces | [Premium](premium.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
