---
type: entity
title: "Coverage"
---

# Coverage

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Coverage](README.md).

Also known as: Coverage (Insurance).

## Definition and detail

A Patient's entitlement to funded or insured services.

Logical attributes: Coverage Identifier; Coverage Type; Coverage Status; Subscriber Identifier; Member Identifier; Effective From; Effective Through; Payer; Plan reference.

### In industries

- **Coverage** (Insurance): A Policy-level grant of protection derived from a Coverage Definition. Attributes: Coverage Identifier; Coverage Code; Coverage Status; Effective From; Effective Through; Limit Amount; Deductible Amount; Coinsurance Percentage; Premium.

## Physical Therapy context

A Patient's entitlement to insured, public, employer-funded, or other third-party-funded services.

Logical attributes: Coverage Identifier; Coverage Type; Coverage Status; Payer; Plan; Member Identifier; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#coverage) | Coverage |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#coverage) | Coverage |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#coverage) | Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Coverage | covers | [Patient](../../care/patient/patient.md) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| [Eligibility Verification](eligibility-verification.md) | evaluates | Coverage | M:1 | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Policy](../policy/policy.md) | contains | Coverage | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Coverage | derives from | [Coverage Definition](../insurance-product/coverage-definition.md) | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
| Coverage | has | Coverage Term or Exclusion (review) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Claim Exposure](../loss-event/claim-exposure.md) | evaluates | Coverage | M:1 | [insurance](../../../../industry-patterns/insurance.md) |

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

- [coverage-must-be-effective-on-service-date](../../care/rules/coverage-must-be-effective-on-service-date.md)
