---
type: entity
title: "Claim Assessment"
---

# Claim Assessment

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Coverage](README.md).

Also known as: Adjudication (Health Care).

## Definition and detail

An evidence-based evaluation of coverage, causation, liability, damage, benefit eligibility, or amount.

Logical attributes: Assessment Identifier; Assessment Type; Assessment Status; Assessed Date; Assessor; Finding; Amount; Rationale; Evidence Reference.

### In industries

- **Adjudication** (Health Care): A Payer decision concerning coverage and financial responsibility. Attributes: Adjudication Identifier; Decision Date; Decision Status; Allowed Amount; Paid Amount; Patient Responsibility Amount; Denial Reason; Adjustment Reason.

## Physical Therapy context

A Payer decision determining allowed, paid, adjusted, denied, and Patient-responsibility amounts.

Logical attributes: Adjudication Identifier; Decision Date; Decision Status; Allowed Amount; Paid Amount; Adjustment Amount; Patient Responsibility; Denial Reason; Remittance Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#adjudication) | Adjudication |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#adjudication) | Adjudication |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#claim-assessment) | Claim Assessment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | receives | Adjudication | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Adjudication | may produce | [Payment](../../finance/payment/payment.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim](claim.md) | receives | Adjudication | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Claim Exposure](../loss-event/claim-exposure.md) | receives | Claim Assessment | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
