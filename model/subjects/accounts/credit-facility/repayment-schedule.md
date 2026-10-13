---
type: entity
title: "Repayment Schedule"
---

# Repayment Schedule

Subject: [Financial Accounts](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

A versioned plan of expected principal, interest, fee, and escrow obligations.

Logical attributes: Schedule Identifier; Version; Effective Date; Payment Frequency; Installment Count; Status; Calculation Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#repayment-schedule) | Repayment Schedule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Loan](loan.md) | has | Repayment Schedule | 1:M versions | [financial-services](../../../../industry-patterns/financial-services.md) |
| Repayment Schedule | contains | [Scheduled Payment](scheduled-payment.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
