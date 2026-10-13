---
type: entity
title: "Claim"
---

# Claim

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Coverage](README.md).

Also known as: Claim (Health Care).

## Definition and detail

A request or case seeking Policy benefits, defense, indemnity, service, or another contractual response to a Loss Event.

Logical attributes: Claim Identifier; Claim Number; Claim Type; Claim Status; Reported Date; Loss Date; Opened Date; Closed Date; Policy; Reporting Party; Assigned Adjuster.

### In industries

- **Claim** (Health Care): A request to a Payer for adjudication and payment of covered health-care charges. Attributes: Claim Identifier; Claim Number; Claim Type; Claim Status; Submitted Date; Service Period Start; Service Period End; Total Claimed Amount; Patient; Provider; Payer.

## Physical Therapy context

A request to a Payer for adjudication of covered therapy services.

Logical attributes: Claim Identifier; Claim Number; Claim Status; Submitted Date; Patient; Provider; Payer; Service Period; Total Claimed Amount.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#claim) | Claim |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#claim) | Claim |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#claim) | Claim |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Claim | contains | [Claim Line](claim-line.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Claim | receives | [Adjudication](claim-assessment.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Claim | contains | [Claim Line](claim-line.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| Claim | receives | [Adjudication](claim-assessment.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Loss Event](../loss-event/loss-event.md) | gives rise to | Claim | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Policy](../policy/policy.md) | responds to | Claim | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim | has | [Claim Party](../../party/party/party-role.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim | contains | [Claim Exposure](../loss-event/claim-exposure.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim | contains | Evidence Item and Claim Note (review) | 1:M each | [insurance](../../../../industry-patterns/insurance.md) |
| Claim | may produce | [Recovery](../loss-event/recovery.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim | may produce | [Reinsurance Claim](../reinsurance-contract/reinsurance-claim.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |

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

- [claim-line-must-trace-to-delivered-service](../../care/rules/claim-line-must-trace-to-delivered-service.md)
- [claim-totals-must-reconcile](../../care/rules/claim-totals-must-reconcile.md)
