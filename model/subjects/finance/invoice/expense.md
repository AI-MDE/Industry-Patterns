---
type: entity
title: "Expense"
---

# Expense

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

## Definition and detail

Reimbursable or non-reimbursable project cost.

Logical attributes: Expense Identifier; Expense Date; Expense Type; Expense Amount; Billable Indicator; Expense Status; Expense Description.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Expense |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](../../work/project/project.md) | incurs | Expense | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Professional](../../workforce/worker/worker.md) | submits | Expense | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
