---
type: primary-entity
title: "Service Instance"
---

# Service Instance

Domain: [Telecommunications](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

An individually managed realization of a Service Specification.

Logical attributes: Service Identifier; Service Number; Service Type; Service Status; Specification Version; Subscription; Start Date; End Date; Provider; Customer-Facing Indicator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-instance) | Service Instance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Order Item](../telecommunications-quote/service-order-item.md) | creates or changes | [Service Instance](service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Instance](service-instance.md) | instantiates | [Service Specification](../telecommunications-product/service-specification.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Instance](service-instance.md) | has | [Service Characteristic](service-characteristic.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Instance](service-instance.md) | uses | [Network Resource](network-resource.md) | M:M through assignment | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Activation](../resource-reservation/service-activation.md) | activates | [Service Instance](service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
| [Trouble Ticket](../trouble-ticket/trouble-ticket.md) | concerns | [Service Instance](service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Instance](service-instance.md) | produces | [Usage Event](../usage-event/usage-event.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
