---
type: entity
title: "Loan"
---

# Loan

Domain: [Financial Services](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

A funded credit obligation governed by a Financial Agreement or Credit Facility.

Logical attributes: Loan Identifier; Loan Type; Loan Status; Original Principal; Outstanding Principal; Currency; Disbursement Date; Maturity Date; Interest Method.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#loan) | Loan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Credit Facility](credit-facility.md) | governs | [Loan](loan.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Loan](loan.md) | has | [Repayment Schedule](repayment-schedule.md) | 1:M versions | [financial-services](../../../../patterns/financial-services.md) |
