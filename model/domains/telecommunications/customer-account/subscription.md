---
type: entity
title: "Subscription"
---

# Subscription

Domain: [Telecommunications](../README.md). ABE: [Customer Account](README.md).

Specializes: [Subscription](../../agreement/agreement/subscription.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Customer's ongoing entitlement to and responsibility for one or more Product or Service instances.

Logical attributes: Subscription Identifier; Subscription Number; Subscription Status; Customer Account; Product Offering; Start Date; End Date; Commitment End; Billing Account.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#subscription) | Subscription |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Customer Agreement](customer-agreement.md) | governs | [Subscription](subscription.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Subscription](subscription.md) | instantiates | [Product Offering](../telecommunications-product/product-offering.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
