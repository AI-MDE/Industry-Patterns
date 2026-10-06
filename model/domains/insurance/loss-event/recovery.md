---
type: entity
title: "Recovery"
---

# Recovery

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

Money or value recovered or expected from salvage, subrogation, contribution, deductible, excess insurer, or another responsible Party.

Logical attributes: Recovery Identifier; Recovery Type; Recovery Status; Expected Amount; Recovered Amount; Recovery Date; Responsible Party.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#recovery) | Recovery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | may produce | [Recovery](recovery.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
