---
type: entity
title: "Project"
---

# Project

Subject: [Work and Projects](../README.md). ABE: [Project](README.md).

Also known as: Project (Crane Rental).

## Definition and detail

Body of work performed for a Client.

Logical attributes: Project Identifier; Project Name; Project Description; Project Status; Start Date; Target End Date; Actual End Date; Billing Method; Budget Amount.

### In industries

- **Project** (Crane Rental): A Customer initiative or construction, industrial, infrastructure, energy, maintenance, or event context containing one or more crane Jobs. Attributes: Project Identifier; Project Name; Project Type; Project Status; Customer; General Contractor; Start Date; End Date; Primary Site.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#project) | Project |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Project |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | sponsors | Project | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Project | contains | [Job Order](../work-effort/work-order.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Engagement](../../agreement/agreement/engagement.md) | authorizes | Project | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | has | [Project Assignment](../work-effort/assignment.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | contains | [Task](../work-effort/work-effort.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | receives | [Time Entry](../../workforce/time-entry/time-entry.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | incurs | [Expense](../../finance/invoice/expense.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | produces | [Deliverable](deliverable.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Project | is billed by | [Invoice](../../finance/invoice/invoice.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
