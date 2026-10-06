---
type: entity
title: "Commission"
---

# Commission

Domain: [Insurance](../README.md). ABE: [Premium](README.md).

## Definition and detail

Compensation payable to a Producer or distribution Party.

Logical attributes: Commission Identifier; Commission Type; Basis Amount; Rate; Commission Amount; Status; Earned Date; Payable Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#commission) | Commission |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Producer (review) | earns | [Commission](commission.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
