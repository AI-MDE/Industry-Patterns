---
type: entity
title: "Approval"
---

# Approval

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Formal approval of time, expense, deliverable, invoice, or project change.

Logical attributes: Approval Identifier; Approval Subject Type; Approval Status; Requested Date; Approved Date; Rejection Reason; Approval Notes.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Approval |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Time Entry, Expense, or Deliverable (review) | receives | [Approval](approval.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
