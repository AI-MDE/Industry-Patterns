---
type: entity
title: "Scheduled Payment"
---

# Scheduled Payment

Domain: [Financial Services](../README.md). ABE: [Credit Facility](README.md).

## Definition and detail

One expected obligation within a Repayment Schedule.

Logical attributes: Scheduled Payment Identifier; Due Date; Principal Due; Interest Due; Fee Due; Total Due; Currency; Payment Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#scheduled-payment) | Scheduled Payment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Repayment Schedule](repayment-schedule.md) | contains | [Scheduled Payment](scheduled-payment.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
