---
type: entity
title: "Operation Definition"
---

# Operation Definition

Domain: [Manufacturing](../README.md). ABE: [Routing](README.md).

## Definition and detail

A reusable or routing-specific definition of work.

Logical attributes: Operation Identifier; Operation Code; Name; Operation Type; Sequence; Standard Setup Time; Standard Run Time; Yield; Work Center Type.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#operation-definition) | Operation Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Routing](routing.md) | contains | [Operation Definition](operation-definition.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Operation Definition](operation-definition.md) | has | [Resource Requirement](resource-requirement.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
