---
type: entity
title: "Journal Entry"
---

# Journal Entry

Subject: [Accounting](../README.md). ABE: [Journal Entry](README.md).

Also known as: Ledger Entry (Financial Services).

## Definition and detail

One debit or credit component of a balanced financial posting.

Logical attributes: Ledger Entry Identifier; Posting Date; Value Date; Debit/Credit Indicator; Amount; Currency; Ledger Account; Transaction; Accounting Dimension; Posting Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#ledger-entry) | Ledger Entry |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Transaction](../../accounts/financial-instruction/financial-transaction.md) | produces | Ledger Entry | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Posting Batch](posting-batch.md) | contains | Ledger Entry | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
