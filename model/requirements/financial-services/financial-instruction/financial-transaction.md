---
type: entity
title: "Financial Transaction"
---

# Financial Transaction

Domain: [Financial Services](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

A business occurrence that changes or confirms financial value, rights, obligations, or position.

Logical attributes: Transaction Identifier; Transaction Type; Transaction Status; Transaction Time; Value Date; Booking Date; Amount; Currency; Account; Counterparty; External Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-transaction) | Financial Transaction |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Instruction (review) | produces | [Financial Transaction](financial-transaction.md) | 1:0..M | [financial-services](../../../../patterns/financial-services.md) |
| [Financial Transaction](financial-transaction.md) | produces | [Ledger Entry](ledger-entry.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Financial Transaction](financial-transaction.md) | relates to | [Financial Transaction](financial-transaction.md) | M:M | [financial-services](../../../../patterns/financial-services.md) |
| [Payment Order](../payment-order/payment-order.md) | produces | [Financial Transaction](financial-transaction.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
