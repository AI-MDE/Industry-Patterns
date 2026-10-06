---
type: primary-entity
title: "Delivery"
---

# Delivery

Domain: [Crane Rental](../README.md). ABE: [Delivery](README.md).

## Definition and detail

The arrival and transfer of Equipment, Components, or custody at a Job Site.

Logical attributes: Delivery Identifier; Delivery Status; Job Order; Movement; Delivered At; Received By; Asset List; Condition; Document Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#delivery) | Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Delivery](delivery.md) | completes | [Transport Movement](../resource-requirement/transport-movement.md) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
