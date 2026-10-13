---
type: entity
title: "Authorization"
---

# Authorization

Subject: [Cases and Decisions](../README.md). ABE: [Decision](README.md).

Also known as: Permit (Crane Rental), Mandate (Financial Services), Authorization (Financial Services), Authorization (Health Care), Therapy Authorization (Physical Therapy).

## Definition and detail

An authorization from a government, road authority, site owner, utility, or other authority.

Logical attributes: Permit Identifier; Permit Type; Permit Number; Permit Status; Issuing Authority; Effective From; Effective Through; Conditions; Document Reference.

### In industries

- **Mandate** (Financial Services): An authorization from a Party defining who may initiate or approve which actions and under what conditions. Attributes: Mandate Identifier; Mandate Type; Mandate Status; Granted By; Effective From; Effective Through; Action Scope; Amount Limit; Approval Rule.
- **Authorization** (Financial Services): An evidence-based decision permitting or declining an Instruction or Transaction. Attributes: Authorization Identifier; Authorization Type; Authorization Status; Requested Time; Decision Time; Decision Reason; Authorized Amount; Currency; Actor or System; Rule Evidence.
- **Authorization** (Health Care): A decision permitting specified care or financial coverage under stated conditions. Attributes: Authorization Identifier; Authorization Number; Authorization Type; Authorization Status; Requested Date; Decision Date; Effective From; Effective Through; Authorized Quantity; Conditions.
- **Therapy Authorization** (Physical Therapy): A Payer, employer, case-manager, or organizational decision permitting specified therapy services under stated conditions. Attributes: Authorization Identifier; Authorization Number; Authorization Status; Requested Date; Decision Date; Effective From; Effective Through; Authorized Visits or Units; Used Visits or Units; Service Scope; Conditions.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#permit) | Permit |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#mandate) | Mandate |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#authorization) | Authorization |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#authorization) | Authorization |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#therapy-authorization) | Therapy Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](../../party/party/party.md) | grants | Mandate | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Mandate | authorizes | Party on Account (review) | M:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Instruction (review) | receives | Authorization | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Authorization | authorizes | Service Request or Service Delivery (review) | M:M | [health-care](../../../../industry-patterns/health-care.md) |
| Therapy Authorization | authorizes | Episode, Visit, or Service (review) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |

## Business participation

Concerns a Patient and Coverage; authorizes Service Requests or Deliveries.

## Operations

- request
- review
- approve
- deny
- amend
- revoke
- expire

## States

draft; requested; in-review; approved; partially-approved; denied; expired; revoked

## Rules

- [authorization-does-not-replace-consent](../../care/rules/authorization-does-not-replace-consent.md)
- [authorized-service-must-match-conditions](../../care/rules/authorized-service-must-match-conditions.md)
