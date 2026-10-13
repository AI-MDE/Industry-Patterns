---
type: entity
title: "Service Order"
---

# Service Order

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Order](README.md).

Specializes: [Order](../../request/order/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An operational order to create, modify, test, activate, suspend, migrate, or terminate Services.

Logical attributes: Service Order Identifier; Service Order Number; Order Type; Status; Product Order; Planned Start; Planned Completion; Actual Completion; Priority.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-order) | Service Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Service Order | contains | [Service Order Item](service-order-item.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Order | contains | [Provisioning Task](../../work/work-effort/work-effort.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
