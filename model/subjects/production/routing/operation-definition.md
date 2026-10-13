---
type: entity
title: "Operation Definition"
---

# Operation Definition

Subject: [Production](../README.md). ABE: [Routing](README.md).

## Definition and detail

A reusable or routing-specific definition of work.

Logical attributes: Operation Identifier; Operation Code; Name; Operation Type; Sequence; Standard Setup Time; Standard Run Time; Yield; Work Center Type.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#operation-definition) | Operation Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Routing](routing.md) | contains | Operation Definition | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Operation Definition | has | [Resource Requirement](../../scheduling/demand/requirement.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
