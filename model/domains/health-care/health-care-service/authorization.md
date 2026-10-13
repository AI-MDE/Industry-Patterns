---
type: entity
title: "Authorization"
---

# Authorization

Domain: [Health Care](../README.md). ABE: [Health Care Service](README.md).

## Definition and detail

A decision permitting specified care or financial coverage under stated conditions.

Logical attributes: Authorization Identifier; Authorization Number; Authorization Type; Authorization Status; Requested Date; Decision Date; Effective From; Effective Through; Authorized Quantity; Conditions.

Rule: clinical orders, patient consent, organizational approval, and payer authorization are distinct concepts.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#authorization) | Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Authorization](authorization.md) | authorizes | Service Request or Service Delivery (review) | M:M | [health-care](../../../../industry-patterns/health-care.md) |

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

- [authorization-does-not-replace-consent](../rules/authorization-does-not-replace-consent.md)
- [authorized-service-must-match-conditions](../rules/authorized-service-must-match-conditions.md)
