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
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#coverage) | Coverage |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#coverage) | Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Coverage](coverage.md) | covers | [Patient](../patient/patient.md) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| [Eligibility Verification](../../physical-therapy/patient-intake/eligibility-verification.md) | evaluates | [Coverage](coverage.md) | M:1 | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |

## Business participation

Covers a Patient; may govern Authorizations and Claims.

## Operations

- record
- verify
- activate
- terminate

## States

draft; active; suspended; terminated; entered-in-error

## Rules

- [coverage-must-be-effective-on-service-date](../rules/coverage-must-be-effective-on-service-date.md)
