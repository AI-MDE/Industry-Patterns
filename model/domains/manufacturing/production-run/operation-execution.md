---
type: entity
title: "Operation Execution"
---

# Operation Execution

Domain: [Manufacturing](../README.md). ABE: [Production Run](README.md).

## Definition and detail

The actual performance of a Work Order Operation.

Logical attributes: Execution Identifier; Work Operation; Status; Start Time; End Time; Work Center; Machine Asset; Good Quantity; Reject Quantity; Rework Quantity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#operation-execution) | Operation Execution |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Order Operation](../manufacturing-requirement/work-order-operation.md) | receives | [Operation Execution](operation-execution.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Operation Execution](operation-execution.md) | consumes | [Material Issue](../inventory-item/material-issue.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Operation Execution](operation-execution.md) | produces | [Production Output](production-output.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Operation Execution](operation-execution.md) | records | Labor, Machine, and Process Measurement (review) | 1:M each | [manufacturing](../../../../patterns/manufacturing.md) |
