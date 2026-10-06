---
type: entity
title: "Therapy Authorization"
---

# Therapy Authorization

Domain: [Physical Therapy](../README.md). ABE: [Patient Intake](README.md).

Specializes: [Authorization](../../health-care/health-care-service/authorization.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Payer, employer, case-manager, or organizational decision permitting specified therapy services under stated conditions.

Logical attributes: Authorization Identifier; Authorization Number; Authorization Status; Requested Date; Decision Date; Effective From; Effective Through; Authorized Visits or Units; Used Visits or Units; Service Scope; Conditions.

Rule: Referral, clinical order, Patient consent, payer authorization, and clinic acceptance are separate decisions.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-authorization) | Therapy Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Authorization](therapy-authorization.md) | authorizes | Episode, Visit, or Service (review) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
