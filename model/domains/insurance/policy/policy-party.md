---
type: entity
title: "Policy Party"
---

# Policy Party

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

## Definition and detail

A Party participating in a Policy in a stated role.

Logical attributes: Policy Party Identifier; Role Type; Role Status; Effective From; Effective Through; Interest Percentage.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#policy-party) | Policy Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy](policy.md) | has | [Policy Party](policy-party.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
