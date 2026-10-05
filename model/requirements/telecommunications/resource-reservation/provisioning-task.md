---
type: entity
title: "Provisioning Task"
---

# Provisioning Task

Domain: [Telecommunications](../README.md). ABE: [Resource Reservation](README.md).

Specializes: [Work Effort](../../work-management/work-effort/work-effort.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A unit of configuration, activation, installation, testing, or recovery work.

Logical attributes: Task Identifier; Task Type; Task Status; Service or Resource Order; Assigned Role or System; Planned Start; Actual Start; Completed At; Result.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#provisioning-task) | Provisioning Task |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Order](../telecommunications-quote/service-order.md) | contains | [Provisioning Task](provisioning-task.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
