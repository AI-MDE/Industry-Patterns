---
type: primary-entity
title: "Credit Facility"
---

# Credit Facility

Domain: [Financial Services](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

An Agreement defining credit capacity and borrowing terms.

Logical attributes: Facility Identifier; Facility Type; Facility Status; Approved Limit; Available Amount; Currency; Start Date; Maturity Date; Borrower.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#credit-facility) | Credit Facility |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Credit Facility](credit-facility.md) | governs | [Loan](loan.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
