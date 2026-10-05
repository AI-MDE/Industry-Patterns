---
type: primary-entity
title: "Policy"
---

# Policy

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The insurance Agreement issued by an Insurer for a defined period.

Logical attributes: Policy Identifier; Policy Number; Policy Type; Policy Status; Issue Date; Effective Date; Expiration Date; Cancellation Date; Currency; Product Version; Insurer.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#policy) | Policy |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Quote/Application (review) | produces | [Policy](policy.md) | 1:0..1 | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | contains | [Policy Period](policy-period.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | has | [Policy Party](policy-party.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | covers | [Insured Object](insured-object.md) | M:M through Coverage | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | contains | [Coverage](coverage.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | changes through | [Policy Transaction](policy-transaction.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Billing Account](../premium/billing-account.md) | bills | [Policy](policy.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy](policy.md) | responds to | [Claim](../loss-event/claim.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
