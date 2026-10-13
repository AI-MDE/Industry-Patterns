---
type: entity
title: "Service Order Item"
---

# Service Order Item

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Order](README.md).

Specializes: [Order Line](../../request/order/order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An action concerning a Service Specification or Service Instance.

Logical attributes: Service Order Item Identifier; Action; Status; Service Specification; Service Instance; Requested Configuration; Dependency; Sequence.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-order-item) | Service Order Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Order Item](../../request/order/order-line.md) | decomposes into | Service Order Item | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Service Order](service-order.md) | contains | Service Order Item | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Order Item | creates or changes | [Service Instance](../service-instance/service-instance.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
