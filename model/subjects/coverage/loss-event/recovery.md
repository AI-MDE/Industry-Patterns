---
type: entity
title: "Recovery"
---

# Recovery

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

Money or value recovered or expected from salvage, subrogation, contribution, deductible, excess insurer, or another responsible Party.

Logical attributes: Recovery Identifier; Recovery Type; Recovery Status; Expected Amount; Recovered Amount; Recovery Date; Responsible Party.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#recovery) | Recovery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](../coverage/claim.md) | may produce | Recovery | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
