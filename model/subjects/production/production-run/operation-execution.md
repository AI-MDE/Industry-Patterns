---
type: entity
title: "Operation Execution"
---

# Operation Execution

Subject: [Production](../README.md). ABE: [Production Run](README.md).

## Definition and detail

The actual performance of a Work Order Operation.

Logical attributes: Execution Identifier; Work Operation; Status; Start Time; End Time; Work Center; Machine Asset; Good Quantity; Reject Quantity; Rework Quantity.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#operation-execution) | Operation Execution |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Order Operation](../manufacturing-order/work-order-operation.md) | receives | Operation Execution | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Operation Execution | consumes | [Material Issue](../../resource/inventory-item/inventory-transaction.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Operation Execution | produces | [Production Output](production-output.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Operation Execution | records | Labor, Machine, and Process Measurement (review) | 1:M each | [manufacturing](../../../../industry-patterns/manufacturing.md) |
