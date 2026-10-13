---
type: entity
title: "Subscription"
---

# Subscription

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

Also known as: Subscription (Telecommunications).

## Definition and detail

A continuing Agreement or Entitlement to receive a Product or Service.

Logical attributes: Subscription Identifier; Subscription Status; Start Date; Renewal Date; End Date; Billing Frequency; Quantity.

### In industries

- **Subscription** (Telecommunications): A Customer's ongoing entitlement to and responsibility for one or more Product or Service instances. Attributes: Subscription Identifier; Subscription Number; Subscription Status; Customer Account; Product Offering; Start Date; End Date; Commitment End; Billing Account.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#subscription) | Subscription |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#subscription) | Subscription |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Subscription | grants | [Entitlement](entitlement.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Customer Agreement](agreement.md) | governs | Subscription | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Subscription | instantiates | [Product Offering](../../product/offering/offering.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
