---
type: entity
title: "Cession"
---

# Cession

Domain: [Insurance](../README.md). ABE: [Reinsurance Contract](README.md).

## Definition and detail

The portion of a Policy, Coverage, premium, reserve, or loss allocated to reinsurance.

Logical attributes: Cession Identifier; Cession Type; Ceded Percentage; Ceded Premium; Ceded Reserve; Ceded Loss; Effective Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#cession) | Cession |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Policy or portfolio (review) | allocates through | [Cession](cession.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
