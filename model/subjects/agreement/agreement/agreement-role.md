---
type: entity
title: "Agreement Role"
---

# Agreement Role

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

Also known as: Policy Party (Insurance), Subscription Party (Telecommunications).

## Definition and detail

The capacity in which a Party participates in an Agreement.

Logical attributes: Agreement Role Identifier; Role Type; Effective From; Effective Through.

Examples: buyer, seller, policyholder, insurer, client, provider, guarantor, or beneficiary.

### In industries

- **Policy Party** (Insurance): A Party participating in a Policy in a stated role. Attributes: Policy Party Identifier; Role Type; Role Status; Effective From; Effective Through; Interest Percentage.
- **Subscription Party** (Telecommunications): A Party participating in a Subscription in a defined role. Attributes: Subscription Party Identifier; Party; Role Type; Status; Effective From; Effective Through; Authority.

## Equipment Service context

Capacity in which a party participates in an agreement (buyer, seller, lessee, lessor, guarantor).

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#agreement-role) | Agreement Role |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#agreement-role) | Agreement Role |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#policy-party) | Policy Party |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#subscription-party) | Subscription Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Agreement](agreement.md) | includes | Agreement Role | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Party](../../party/party/party.md) | participates through | Agreement Role | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Policy](../../coverage/policy/policy.md) | has | Policy Party | 1:M | [insurance](../../../../industry-patterns/insurance.md) |

## Integrity rules

- An Agreement Role must be active within the relevant Agreement period.
