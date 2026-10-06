---
type: entity
title: "Production Output"
---

# Production Output

Domain: [Manufacturing](../README.md). ABE: [Production Run](README.md).

## Definition and detail

A quantity or serialized unit produced by an Operation or Run.

Logical attributes: Output Identifier; Product or Part Revision; Quantity; Unit; Lot; Serial; Produced At; Output Status; Source Operation.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#production-output) | Production Output |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Operation Execution](operation-execution.md) | produces | [Production Output](production-output.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Production Output](production-output.md) | receives | [Inspection](../quality-plan/inspection.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
