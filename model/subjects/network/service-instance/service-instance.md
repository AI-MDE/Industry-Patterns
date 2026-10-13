---
type: entity
title: "Service Instance"
---

# Service Instance

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

An individually managed realization of a Service Specification.

Logical attributes: Service Identifier; Service Number; Service Type; Service Status; Specification Version; Subscription; Start Date; End Date; Provider; Customer-Facing Indicator.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-instance) | Service Instance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Order Item](../service-order/service-order-item.md) | creates or changes | Service Instance | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Instance | instantiates | [Service Specification](../service-specification/service-specification.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Instance | has | [Service Characteristic](service-characteristic.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Instance | uses | [Network Resource](network-resource.md) | M:M through assignment | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Service Activation](../service-activation/service-activation.md) | activates | Service Instance | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Trouble Ticket](../../case/case/case.md) | concerns | Service Instance | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Instance | produces | [Usage Event](../../measurement/usage-record/usage-record.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
