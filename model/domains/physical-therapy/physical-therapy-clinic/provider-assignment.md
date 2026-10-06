---
type: entity
title: "Provider Assignment"
---

# Provider Assignment

Domain: [Physical Therapy](../README.md). ABE: [Physical Therapy Clinic](README.md).

Specializes: [Assignment](../../work-management/work-effort/assignment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Provider's responsibility within an Episode, Plan of Care, Visit, or program.

Logical attributes: Assignment Identifier; Assignment Role; Assignment Status; Assigned Date; Effective From; Effective Through; Supervising Provider; Responsibility.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#provider-assignment) | Provider Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Provider](therapy-provider.md) | receives | [Provider Assignment](provider-assignment.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
