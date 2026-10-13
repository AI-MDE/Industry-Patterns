---
type: entity
title: "Customer Account"
---

# Customer Account

Subject: [Parties and Roles](../README.md). ABE: [Customer Account](README.md).

Also known as: Customer Account (Crane Rental), Customer Profile (Financial Services), Client Account (Professional Services).

## Definition and detail

The provider's commercial relationship with a Customer.

Logical attributes: Customer Account Identifier; Account Number; Account Status; Customer; Segment; Credit Status; Responsible Organization; Opened Date; Closed Date.

### In industries

- **Customer Account** (Crane Rental): The Rental Provider's governed commercial relationship with a Customer. Attributes: Customer Account Identifier; Account Status; Credit Status; Billing Terms; Tax Status; Responsible Branch; Effective From; Effective Through.
- **Customer Profile** (Financial Services): The institution's governed view of a Party as a Customer. Attributes: Customer Identifier; Customer Type; Customer Status; Risk Rating; Service Segment; Onboarded Date; Review Due Date; Responsible Unit.
- **Client Account** (Professional Services): continuing commercial relationship that groups Engagements.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#customer-account) | Customer Account |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#customer-profile) | Customer Profile |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Client Account |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#customer-account) | Customer Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | owns | Customer Account | 1:M by provider | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Party](../party/party.md) | has | Customer Profile | 1:M by institution | [financial-services](../../../../industry-patterns/financial-services.md) |
| Customer (review) | owns | Customer Account | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Customer Account | has | [Billing Account](../../finance/invoice/billing-account.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
