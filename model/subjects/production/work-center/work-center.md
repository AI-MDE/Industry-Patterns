---
type: entity
title: "Work Center"
---

# Work Center

Subject: [Production](../README.md). ABE: [Work Center](README.md).

Specializes: [Resource](../../resource/resource/resource.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A logical or physical production capacity where Operations are performed.

Logical attributes: Work Center Identifier; Work Center Name; Work Center Type; Facility; Capacity Unit; Calendar; Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#work-center) | Work Center |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Facility (review) | contains | Work Center | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Work Center | contains | [Machine Asset](../../resource/equipment-model/equipment.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
