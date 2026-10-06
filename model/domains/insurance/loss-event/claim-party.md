---
type: entity
title: "Claim Party"
---

# Claim Party

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

A Party participating in the Claim in a stated role.

Logical attributes: Claim Party Identifier; Role Type; Role Status; Effective From; Effective Through; Representation Reference.

Roles include claimant, insured, injured party, witness, service provider, attorney, adjuster, investigator, and recovery target.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim-party) | Claim Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | has | [Claim Party](claim-party.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
