---
type: entity
title: "Due Diligence Case"
---

# Due Diligence Case

Subject: [Financial Accounts](../README.md). ABE: [Due Diligence Case](README.md).

Specializes: [Case](../../case/case/case.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A managed evaluation of identity, ownership, purpose, eligibility, sanctions, adverse information, and financial-crime risk.

Logical attributes: Case Identifier; Case Type; Case Status; Opened Date; Risk Rating; Assigned Role; Review Due Date; Decision; Decision Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#due-diligence-case) | Due Diligence Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Due Diligence Case | evaluates | Customer, Application, or relationship (review) | M:1 | [financial-services](../../../../industry-patterns/financial-services.md) |
