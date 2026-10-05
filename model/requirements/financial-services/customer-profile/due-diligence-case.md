---
type: entity
title: "Due Diligence Case"
---

# Due Diligence Case

Domain: [Financial Services](../README.md). ABE: [Customer Profile](README.md).

## Definition and detail

A managed evaluation of identity, ownership, purpose, eligibility, sanctions, adverse information, and financial-crime risk.

Logical attributes: Case Identifier; Case Type; Case Status; Opened Date; Risk Rating; Assigned Role; Review Due Date; Decision; Decision Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#due-diligence-case) | Due Diligence Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Due Diligence Case](due-diligence-case.md) | evaluates | Customer, Application, or relationship (review) | M:1 | [financial-services](../../../../patterns/financial-services.md) |
