---
type: entity
title: "Project Assignment"
---

# Project Assignment

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Assignment](../../work-management/work-effort/assignment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Professional's role and responsibility on a Project.

Logical attributes: Assignment Identifier; Assignment Role; Assignment Status; Assignment Start Date; Assignment End Date; Allocation Percentage; Planned Hours; Billing Rate Override.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Project Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | has | [Project Assignment](project-assignment.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | participates through | [Project Assignment](project-assignment.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
