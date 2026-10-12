---
type: primary-entity
title: "Work Effort"
---

# Work Effort

Domain: [Work Management](../README.md). ABE: [Work Effort](README.md).

## Definition and detail

A planned or performed unit of work, including a process, project, phase, task, activity, case step, or service action.

Logical attributes: Work Effort Identifier; Work Type; Work Name; Work Status; Planned Start; Planned End; Actual Start; Actual End; Parent Work Effort reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#work-effort) | Work Effort |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Business Event](business-event.md) | may trigger | [Work Effort](work-effort.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Work Effort](work-effort.md) | contains | [Work Effort](work-effort.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Assignment](assignment.md) | allocates to | [Work Effort](work-effort.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
| [Work Effort](work-effort.md) | produces | [Outcome](outcome.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
