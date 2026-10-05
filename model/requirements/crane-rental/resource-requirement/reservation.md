---
type: entity
title: "Reservation"
---

# Reservation

Domain: [Crane Rental](../README.md). ABE: [Resource Requirement](README.md).

## Definition and detail

A time-bounded allocation of a Resource to a Job Order.

Logical attributes: Reservation Identifier; Reservation Status; Resource; Job Order; Reserved From; Reserved Through; Quantity; Priority; Conflict Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#reservation) | Reservation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Resource Requirement](resource-requirement.md) | fulfilled by | [Reservation](reservation.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Reservation](reservation.md) | allocates | Asset, Component, Person, or service (review) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
