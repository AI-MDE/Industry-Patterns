---
type: entity
title: "Repayment Schedule"
---

# Repayment Schedule

Domain: [Financial Services](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

A versioned plan of expected principal, interest, fee, and escrow obligations.

Logical attributes: Schedule Identifier; Version; Effective Date; Payment Frequency; Installment Count; Status; Calculation Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#repayment-schedule) | Repayment Schedule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Loan](loan.md) | has | [Repayment Schedule](repayment-schedule.md) | 1:M versions | [financial-services](../../../../patterns/financial-services.md) |
| [Repayment Schedule](repayment-schedule.md) | contains | [Scheduled Payment](scheduled-payment.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
