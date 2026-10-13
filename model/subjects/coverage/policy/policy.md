---
type: entity
title: "Policy"
---

# Policy

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Policy](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The insurance Agreement issued by an Insurer for a defined period.

Logical attributes: Policy Identifier; Policy Number; Policy Type; Policy Status; Issue Date; Effective Date; Expiration Date; Cancellation Date; Currency; Product Version; Insurer.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#policy) | Policy |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Quote/Application (review) | produces | Policy | 1:0..1 | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | contains | [Policy Period](policy-period.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | has | [Policy Party](../../agreement/agreement/agreement-role.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | covers | [Insured Object](insured-object.md) | M:M through Coverage | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | contains | [Coverage](../coverage/coverage.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | changes through | [Policy Transaction](policy-transaction.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Billing Account](../../finance/invoice/billing-account.md) | bills | Policy | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Policy | responds to | [Claim](../coverage/claim.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
