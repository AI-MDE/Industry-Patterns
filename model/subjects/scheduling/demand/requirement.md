---
type: entity
title: "Requirement"
---

# Requirement

Subject: [Scheduling and Reservations](../README.md). ABE: [Demand](README.md).

Also known as: Resource Requirement (Crane Rental), Skill Requirement (Equipment Service), Resource Requirement (Manufacturing).

## Definition and detail

A condition that Demand places on candidate Resources or on the complete Assignment.

Requirements are configuration-time business definitions rather than fixed application fields.

### In industries

- **Resource Requirement** (Crane Rental): A required asset, component, person, service, or capacity for a Job Order. Attributes: Requirement Identifier; Resource Type; Required Capability; Quantity; Start Time; End Time; Location; Priority; Substitution Rule.
- **Skill Requirement** (Equipment Service): Configuration mapping (Service Type × Equipment Category → Skill set) used to derive the Skills a request requires. Binds the **Requirement** role.
- **Resource Requirement** (Manufacturing): A required capability, labor role, machine, tool, material, instruction, or condition for an Operation. Attributes: Requirement Identifier; Resource Type; Required Capability; Quantity; Duration; Qualification; Alternate Group.

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#requirement) | Requirement |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#resource-requirement) | Resource Requirement |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#skill-requirement) | Skill Requirement |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#resource-requirement) | Resource Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../../work/work-effort/work-order.md) | has | Resource Requirement | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Resource Requirement | fulfilled by | [Reservation](../reservation/reservation.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Operation Definition](../../production/routing/operation-definition.md) | has | Resource Requirement | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
