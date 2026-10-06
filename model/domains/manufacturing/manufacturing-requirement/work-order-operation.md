---
type: entity
title: "Work Order Operation"
---

# Work Order Operation

Domain: [Manufacturing](../README.md). ABE: [Manufacturing Requirement](README.md).

## Definition and detail

An order-specific instance of an Operation Definition.

Logical attributes: Work Operation Identifier; Sequence; Status; Work Center; Planned Start; Planned End; Actual Start; Actual End; Planned Quantity; Completed Quantity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#work-order-operation) | Work Order Operation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Order](manufacturing-order.md) | contains | [Work Order Operation](work-order-operation.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Work Order Operation](work-order-operation.md) | receives | [Operation Execution](../production-run/operation-execution.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
