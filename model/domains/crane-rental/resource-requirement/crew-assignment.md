---
type: entity
title: "Crew Assignment"
---

# Crew Assignment

Domain: [Crane Rental](../README.md). ABE: [Resource Requirement](README.md).

Specializes: [Assignment](../../work-management/work-effort/assignment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Person's scheduled operational role on a Job Order, movement, setup, or Lift.

Logical attributes: Assignment Identifier; Person; Role; Job Order; Shift; Start Time; End Time; Status; Qualification Verification; Supervisor.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#crew-assignment) | Crew Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | has | [Crew Assignment](crew-assignment.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
