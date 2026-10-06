---
type: entity
title: "Service Order Item"
---

# Service Order Item

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Quote](README.md).

Specializes: [Order Line](../../request-and-fulfillment/request/order-line.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An action concerning a Service Specification or Service Instance.

Logical attributes: Service Order Item Identifier; Action; Status; Service Specification; Service Instance; Requested Configuration; Dependency; Sequence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-order-item) | Service Order Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Order Item](product-order-item.md) | decomposes into | [Service Order Item](service-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Order](service-order.md) | contains | [Service Order Item](service-order-item.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Order Item](service-order-item.md) | creates or changes | [Service Instance](../service-instance/service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
