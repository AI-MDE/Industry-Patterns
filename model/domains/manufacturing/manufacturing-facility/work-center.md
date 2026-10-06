---
type: entity
title: "Work Center"
---

# Work Center

Domain: [Manufacturing](../README.md). ABE: [Manufacturing Facility](README.md).

## Definition and detail

A logical or physical production capacity where Operations are performed.

Logical attributes: Work Center Identifier; Work Center Name; Work Center Type; Facility; Capacity Unit; Calendar; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#work-center) | Work Center |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Facility (review) | contains | [Work Center](work-center.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Work Center](work-center.md) | contains | [Machine Asset](machine-asset.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
