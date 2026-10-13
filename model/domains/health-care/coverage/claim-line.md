---
type: entity
title: "Claim Line"
---

# Claim Line

Domain: [Health Care](../README.md). ABE: [Coverage](README.md).

## Definition and detail

A detailed service or charge submitted within a Claim.

Logical attributes: Claim Line Identifier; Line Number; Service Code; Service Date; Quantity; Claimed Amount; Diagnosis reference; Authorization reference.

## Physical Therapy context

A detailed service or charge within a Claim.

Logical attributes: Claim Line Identifier; Line Number; Service Code; Service Date; Units; Claimed Amount; Diagnosis Reference; Authorization Reference; Rendering Provider; Charge Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#claim-line) | Claim Line |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#claim-line) | Claim Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim Line](claim-line.md) | references | Charge or Service Delivery (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Claim Line](claim-line.md) | references | [Therapy Charge](../../physical-therapy/therapy-charge/therapy-charge.md) | M:1 | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |

## Business participation

Belongs to one Claim; references a Service Delivery or Charge; receives line adjudication.

## Operations

- add
- validate
- adjust
- remove-before-submission

## States

draft; validated; submitted; adjudicated; denied; paid

## Rules

- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
