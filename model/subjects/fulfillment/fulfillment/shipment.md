---
type: entity
title: "Shipment"
---

# Shipment

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

Also known as: Transport Movement (Crane Rental), Shipment (E-Commerce).

## Definition and detail

A movement of Equipment or Components between locations.

Logical attributes: Movement Identifier; Movement Type; Movement Status; Origin; Destination; Planned Departure; Actual Departure; Planned Arrival; Actual Arrival; Carrier; Vehicle; Route Reference.

### In industries

- **Shipment** (E-Commerce): A physical dispatch from a fulfillment location to a destination. Attributes: Shipment Identifier; Shipment Number; Shipment Status; Ship Date; Carrier; Service Level; Tracking Number; Estimated Delivery Date; Actual Delivery Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#transport-movement) | Transport Movement |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#shipment) | Shipment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Dispatch Plan](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | contains | Transport Movement | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Transport Movement | carries | Asset or Component (review) | M:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Delivery](delivery.md) | completes | Transport Movement | M:1 | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Shipment | contains | [Shipment Item](shipment-item.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Shipment | results in | [Delivery](delivery.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
