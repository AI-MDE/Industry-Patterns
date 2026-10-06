---
type: entity
title: "Claim Exposure"
---

# Claim Exposure

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

A separately evaluated component of potential Claim obligation.

Logical attributes: Exposure Identifier; Exposure Type; Exposure Status; Coverage; Claimant; Limit; Deductible; Opened Date; Closed Date.

Examples: property damage, bodily injury, defense expense, medical benefit, income loss, or death benefit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim-exposure) | Claim Exposure |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | contains | [Claim Exposure](claim-exposure.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim Exposure](claim-exposure.md) | evaluates | [Coverage](../policy/coverage.md) | M:1 | [insurance](../../../../patterns/insurance.md) |
| [Claim Exposure](claim-exposure.md) | receives | [Claim Assessment](claim-assessment.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Claim Exposure](claim-exposure.md) | has | [Reserve](reserve.md) | 1:M over time | [insurance](../../../../patterns/insurance.md) |
