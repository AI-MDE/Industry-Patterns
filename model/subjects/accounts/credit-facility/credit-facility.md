---
type: entity
title: "Credit Facility"
---

# Credit Facility

Subject: [Financial Accounts](../README.md). ABE: [Credit Facility](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement defining credit capacity and borrowing terms.

Logical attributes: Facility Identifier; Facility Type; Facility Status; Approved Limit; Available Amount; Currency; Start Date; Maturity Date; Borrower.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#credit-facility) | Credit Facility |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Credit Facility | governs | [Loan](loan.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
