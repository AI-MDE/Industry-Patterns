---
type: entity
title: "Dispatch Plan"
---

# Dispatch Plan

Domain: [Crane Rental](../README.md). ABE: [Resource Requirement](README.md).

## Definition and detail

A coordinated plan for assets, components, transport units, drivers, crew, route, sequence, and timing.

Logical attributes: Dispatch Plan Identifier; Plan Status; Job Order; Dispatch Date; Origin; Destination; Coordinator; Planned Departure; Planned Arrival; Sequence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#dispatch-plan) | Dispatch Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Dispatch Plan](dispatch-plan.md) | contains | [Transport Movement](transport-movement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
