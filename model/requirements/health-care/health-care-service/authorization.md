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
| [patterns/health-care.md](../../../../patterns/health-care.md#authorization) | Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Authorization](authorization.md) | authorizes | Service Request or Service Delivery (review) | M:M | [health-care](../../../../patterns/health-care.md) |
