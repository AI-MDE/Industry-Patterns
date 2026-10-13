---
type: entity
title: "Premium"
---

# Premium

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Premium](README.md).

Specializes: [Charge](../../finance/invoice/charge.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The amount charged for assuming insurance risk for a Coverage, Policy Period, or transaction.

Logical attributes: Premium Identifier; Premium Type; Amount; Currency; Effective From; Effective Through; Rating Plan; Calculation Evidence.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#premium) | Premium |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Coverage or Policy Period (review) | produces | Premium | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
