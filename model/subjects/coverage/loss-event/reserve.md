---
type: entity
title: "Reserve"
---

# Reserve

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An estimate of expected future Claim cost for an Exposure or expense category.

Logical attributes: Reserve Identifier; Reserve Type; Reserve Status; Amount; Currency; Effective Date; Established By; Reason; Prior Reserve Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#reserve) | Reserve |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim Exposure](claim-exposure.md) | has | Reserve | 1:M over time | [insurance](../../../../industry-patterns/insurance.md) |
