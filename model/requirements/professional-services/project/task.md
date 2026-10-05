---
type: entity
title: "Task"
---

# Task

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Work Effort](../../work-management/work-effort/work-effort.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Unit of work within a Project.

Logical attributes: Task Identifier; Task Name; Task Description; Task Status; Planned Start Date; Planned End Date; Estimated Hours; Actual Hours.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Task |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | contains | [Task](task.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Task](task.md) | is supported by | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
