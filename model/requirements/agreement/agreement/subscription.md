---
type: entity
title: "Subscription"
---

# Subscription

Domain: [Agreement](../README.md). ABE: [Agreement](README.md).

## Definition and detail

A continuing Agreement or Entitlement to receive a Product or Service.

Logical attributes: Subscription Identifier; Subscription Status; Start Date; Renewal Date; End Date; Billing Frequency; Quantity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#subscription) | Subscription |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Subscription](subscription.md) | grants | [Entitlement](entitlement.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
