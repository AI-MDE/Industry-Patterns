---
type: entity
title: "Claim"
---

# Claim

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

A request or case seeking Policy benefits, defense, indemnity, service, or another contractual response to a Loss Event.

Logical attributes: Claim Identifier; Claim Number; Claim Type; Claim Status; Reported Date; Loss Date; Opened Date; Closed Date; Policy; Reporting Party; Assigned Adjuster.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim) | Claim |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Loss Event](loss-event.md) | gives rise to | [Claim](claim.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy](../policy/policy.md) | responds to | [Claim](claim.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim](claim.md) | has | [Claim Party](claim-party.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim](claim.md) | contains | [Claim Exposure](claim-exposure.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim](claim.md) | contains | Evidence Item and Claim Note (review) | 1:M each | [insurance](../../../../patterns/insurance.md) |
| [Claim](claim.md) | may produce | [Recovery](recovery.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim](claim.md) | may produce | [Reinsurance Claim](../reinsurance-contract/reinsurance-claim.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
