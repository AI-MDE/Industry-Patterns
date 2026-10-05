---
type: entity
title: "Entitlement"
---

# Entitlement

Domain: [Agreement](../README.md). ABE: [Agreement](README.md).

## Definition and detail

A right granted to a Party by an Agreement, purchase, policy, subscription, or authority.

Logical attributes: Entitlement Identifier; Entitlement Type; Entitlement Status; Quantity or Limit; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#entitlement) | Entitlement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Subscription](subscription.md) | grants | [Entitlement](entitlement.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
