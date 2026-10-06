---
type: entity
title: "Settlement"
---

# Settlement

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An approved resolution of all or part of a Claim or Exposure.

Logical attributes: Settlement Identifier; Settlement Type; Settlement Status; Offered Date; Accepted Date; Gross Amount; Deductible Amount; Net Amount; Payee; Release Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#settlement) | Settlement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Claim or Exposure (review) | resolves through | [Settlement](settlement.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
