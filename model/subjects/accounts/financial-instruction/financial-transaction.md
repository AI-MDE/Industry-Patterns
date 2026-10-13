---
type: entity
title: "Financial Transaction"
---

# Financial Transaction

Subject: [Financial Accounts](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

A business occurrence that changes or confirms financial value, rights, obligations, or position.

Logical attributes: Transaction Identifier; Transaction Type; Transaction Status; Transaction Time; Value Date; Booking Date; Amount; Currency; Account; Counterparty; External Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#financial-transaction) | Financial Transaction |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Instruction (review) | produces | Financial Transaction | 1:0..M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Financial Transaction | produces | [Ledger Entry](../../accounting/journal-entry/journal-entry.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Financial Transaction | relates to | Financial Transaction | M:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Payment Order](../payment-order/payment-order.md) | produces | Financial Transaction | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
