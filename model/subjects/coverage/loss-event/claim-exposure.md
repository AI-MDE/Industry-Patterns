---
type: entity
title: "Claim Exposure"
---

# Claim Exposure

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

A separately evaluated component of potential Claim obligation.

Logical attributes: Exposure Identifier; Exposure Type; Exposure Status; Coverage; Claimant; Limit; Deductible; Opened Date; Closed Date.

Examples: property damage, bodily injury, defense expense, medical benefit, income loss, or death benefit.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#claim-exposure) | Claim Exposure |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](../coverage/claim.md) | contains | Claim Exposure | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim Exposure | evaluates | [Coverage](../coverage/coverage.md) | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
| Claim Exposure | receives | [Claim Assessment](../coverage/claim-assessment.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Claim Exposure | has | [Reserve](reserve.md) | 1:M over time | [insurance](../../../../industry-patterns/insurance.md) |
