---
type: entity
title: "Transport Movement"
---

# Transport Movement

Domain: [Crane Rental](../README.md). ABE: [Resource Requirement](README.md).

## Definition and detail

A movement of Equipment or Components between locations.

Logical attributes: Movement Identifier; Movement Type; Movement Status; Origin; Destination; Planned Departure; Actual Departure; Planned Arrival; Actual Arrival; Carrier; Vehicle; Route Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#transport-movement) | Transport Movement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Dispatch Plan](dispatch-plan.md) | contains | [Transport Movement](transport-movement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Transport Movement](transport-movement.md) | carries | Asset or Component (review) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Delivery](../delivery/delivery.md) | completes | [Transport Movement](transport-movement.md) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
