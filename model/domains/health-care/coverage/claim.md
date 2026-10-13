---
type: entity
title: "Claim"
---

# Claim

Domain: [Health Care](../README.md). ABE: [Coverage](README.md).

## Definition and detail

A request to a Payer for adjudication and payment of covered health-care charges.

Logical attributes: Claim Identifier; Claim Number; Claim Type; Claim Status; Submitted Date; Service Period Start; Service Period End; Total Claimed Amount; Patient; Provider; Payer.

## Physical Therapy context

A request to a Payer for adjudication of covered therapy services.

Logical attributes: Claim Identifier; Claim Number; Claim Status; Submitted Date; Patient; Provider; Payer; Service Period; Total Claimed Amount.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#claim) | Claim |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#claim) | Claim |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim](claim.md) | receives | [Adjudication](adjudication.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim](claim.md) | contains | [Claim Line](claim-line.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Claim](claim.md) | receives | [Adjudication](adjudication.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |

## Business participation

Contains Claim Lines; references Coverage and Authorization; receives Adjudications and Payments.

## Operations

- assemble
- validate
- submit
- correct
- appeal
- void
- close
- record-adjudication

## States

draft; submitted; acknowledged; in-review; adjudicated; rejected; denied; partially-paid; paid; appealed; closed; voided

## Rules

- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
- [claim-totals-must-reconcile](../rules/claim-totals-must-reconcile.md)
