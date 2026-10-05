---
type: entity
title: "Reserve"
---

# Reserve

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An estimate of expected future Claim cost for an Exposure or expense category.

Logical attributes: Reserve Identifier; Reserve Type; Reserve Status; Amount; Currency; Effective Date; Established By; Reason; Prior Reserve Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#reserve) | Reserve |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim Exposure](claim-exposure.md) | has | [Reserve](reserve.md) | 1:M over time | [insurance](../../../../patterns/insurance.md) |
