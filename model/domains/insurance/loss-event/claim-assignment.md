---
type: entity
title: "Claim Assignment"
---

# Claim Assignment

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

Specializes: [Assignment](../../work-management/work-effort/assignment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Allocation of responsibility for a Claim, Exposure, investigation, or task.

Logical attributes: Assignment Identifier; Assignment Type; Assigned Role or Party; Assignment Status; Assigned Date; Due Date; Authority Limit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim-assignment) | Claim Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Claim or Exposure (review) | receives | [Claim Assignment](claim-assignment.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
