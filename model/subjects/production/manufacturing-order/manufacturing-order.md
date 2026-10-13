---
type: entity
title: "Manufacturing Order"
---

# Manufacturing Order

Subject: [Production](../README.md). ABE: [Manufacturing Order](README.md).

Specializes: [Work Order](../../work/work-effort/work-order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An authorized order to produce a defined quantity of a Product Version.

Logical attributes: Order Identifier; Order Number; Order Type; Order Status; Product Version; Ordered Quantity; Unit; Facility; Planned Start; Planned End; Due Date; Priority.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#manufacturing-order) | Manufacturing Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Requirement](../../scheduling/demand/demand.md) | produces | Manufacturing Order | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Manufacturing Order | contains | [Work Order Operation](work-order-operation.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Manufacturing Order | contains | [Material Requirement](material-requirement.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Manufacturing Order | has | [Production Run](../production-run/production-run.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
