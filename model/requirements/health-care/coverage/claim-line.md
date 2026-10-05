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
| [patterns/health-care.md](../../../../patterns/health-care.md#claim-line) | Claim Line |
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#claim-line) | Claim Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Claim Line](claim-line.md) | references | Charge or Service Delivery (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Claim Line](claim-line.md) | references | [Therapy Charge](../../physical-therapy/therapy-charge/therapy-charge.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
