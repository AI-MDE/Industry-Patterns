---
type: entity
title: "Manufacturing Order"
---

# Manufacturing Order

Domain: [Manufacturing](../README.md). ABE: [Manufacturing Requirement](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An authorized order to produce a defined quantity of a Product Version.

Logical attributes: Order Identifier; Order Number; Order Type; Order Status; Product Version; Ordered Quantity; Unit; Facility; Planned Start; Planned End; Due Date; Priority.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#manufacturing-order) | Manufacturing Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Requirement](manufacturing-requirement.md) | produces | [Manufacturing Order](manufacturing-order.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Manufacturing Order](manufacturing-order.md) | contains | [Work Order Operation](work-order-operation.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Manufacturing Order](manufacturing-order.md) | contains | [Material Requirement](material-requirement.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [Manufacturing Order](manufacturing-order.md) | has | [Production Run](../production-run/production-run.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
