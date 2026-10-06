---
type: entity
title: "Expense"
---

# Expense

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Reimbursable or non-reimbursable project cost.

Logical attributes: Expense Identifier; Expense Date; Expense Type; Expense Amount; Billable Indicator; Expense Status; Expense Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Expense |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | incurs | [Expense](expense.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | submits | [Expense](expense.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
