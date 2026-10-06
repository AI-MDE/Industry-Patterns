---
type: primary-entity
title: "Coverage"
---

# Coverage

Domain: [Health Care](../README.md). ABE: [Coverage](README.md).

Specializes: [Entitlement](../../agreement/agreement/entitlement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Patient's entitlement to funded or insured services.

Logical attributes: Coverage Identifier; Coverage Type; Coverage Status; Subscriber Identifier; Member Identifier; Effective From; Effective Through; Payer; Plan reference.

## Physical Therapy context

A Patient's entitlement to insured, public, employer-funded, or other third-party-funded services.

Logical attributes: Coverage Identifier; Coverage Type; Coverage Status; Payer; Plan; Member Identifier; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#coverage) | Coverage |
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#coverage) | Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Coverage](coverage.md) | covers | [Patient](../patient/patient.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Eligibility Verification](../../physical-therapy/patient-intake/eligibility-verification.md) | evaluates | [Coverage](coverage.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
