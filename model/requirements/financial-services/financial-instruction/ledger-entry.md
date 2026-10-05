---
type: entity
title: "Ledger Entry"
---

# Ledger Entry

Domain: [Financial Services](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

One debit or credit component of a balanced financial posting.

Logical attributes: Ledger Entry Identifier; Posting Date; Value Date; Debit/Credit Indicator; Amount; Currency; Ledger Account; Transaction; Accounting Dimension; Posting Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#ledger-entry) | Ledger Entry |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Transaction](financial-transaction.md) | produces | [Ledger Entry](ledger-entry.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Posting Batch](posting-batch.md) | contains | [Ledger Entry](ledger-entry.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
