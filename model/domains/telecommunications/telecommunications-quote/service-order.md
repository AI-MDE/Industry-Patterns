---
type: entity
title: "Service Order"
---

# Service Order

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Quote](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An operational order to create, modify, test, activate, suspend, migrate, or terminate Services.

Logical attributes: Service Order Identifier; Service Order Number; Order Type; Status; Product Order; Planned Start; Planned Completion; Actual Completion; Priority.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-order) | Service Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Order](service-order.md) | contains | [Service Order Item](service-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Order](service-order.md) | contains | [Provisioning Task](../resource-reservation/provisioning-task.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
