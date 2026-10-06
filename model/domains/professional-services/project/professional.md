---
type: entity
title: "Professional"
---

# Professional

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Staff member, contractor, partner, consultant, lawyer, accountant, or other service provider.

Logical attributes: Professional Identifier; Professional Name; Professional Role; Professional Status; Standard Billing Rate; Standard Cost Rate; Email Address.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Professional |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Professional](professional.md) | manages | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | participates through | [Project Assignment](project-assignment.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | records | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | submits | [Expense](expense.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
