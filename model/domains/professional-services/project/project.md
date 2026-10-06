---
type: primary-entity
title: "Project"
---

# Project

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Work Effort](../../work-management/work-effort/work-effort.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Body of work performed for a Client.

Logical attributes: Project Identifier; Project Name; Project Description; Project Status; Start Date; Target End Date; Actual End Date; Billing Method; Budget Amount.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Project |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Engagement](engagement.md) | authorizes | [Project](project.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | has | [Project Assignment](project-assignment.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | contains | [Task](task.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | receives | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | incurs | [Expense](expense.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | produces | [Deliverable](deliverable.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](project.md) | is billed by | [Invoice](../../finance/invoice/invoice.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
