---
type: entity
title: "Work Effort"
---

# Work Effort

Subject: [Work and Projects](../README.md). ABE: [Work Effort](README.md).

Also known as: Work Effort (Equipment Service), Task (Professional Services), Work Effort (Professional Services), Provisioning Task (Telecommunications).

## Definition and detail

A planned or performed unit of work, including a process, project, phase, task, activity, case step, or service action.

Logical attributes: Work Effort Identifier; Work Type; Work Name; Work Status; Planned Start; Planned End; Actual Start; Actual End; Parent Work Effort reference.

### In industries

- **Work Effort** (Equipment Service): Planned or performed unit of work within a request, hierarchical (phase → task) and sequenced, optionally assigned to one of the request's Technicians. Specializes cross-industry Work Effort.
- **Task** (Professional Services): Unit of work within a Project. Attributes: Task Identifier; Task Name; Task Description; Task Status; Planned Start Date; Planned End Date; Estimated Hours; Actual Hours.
- **Work Effort** (Professional Services): generalized task, phase, milestone, activity, or matter step; may contain child Work Efforts.
- **Provisioning Task** (Telecommunications): A unit of configuration, activation, installation, testing, or recovery work. Attributes: Task Identifier; Task Type; Task Status; Service or Resource Order; Assigned Role or System; Planned Start; Actual Start; Completed At; Result.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#work-effort) | Work Effort |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#work-effort) | Work Effort |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Task |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Work Effort |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#provisioning-task) | Provisioning Task |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Business Event](../status-type/business-event.md) | may trigger | Work Effort | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Work Effort | contains | Work Effort | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Assignment](assignment.md) | allocates to | Work Effort | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Work Effort | produces | [Outcome](outcome.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Project](../project/project.md) | contains | Task | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Task | is supported by | [Time Entry](../../workforce/time-entry/time-entry.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Service Order](../../network/service-order/service-order.md) | contains | Provisioning Task | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
