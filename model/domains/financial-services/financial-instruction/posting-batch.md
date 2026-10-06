---
type: entity
title: "Posting Batch"
---

# Posting Batch

Domain: [Financial Services](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

A controlled group of Ledger Entries submitted and posted together.

Logical attributes: Posting Batch Identifier; Batch Type; Batch Status; Created Time; Posted Time; Entry Count; Debit Total; Credit Total; Currency or Currency Set.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#posting-batch) | Posting Batch |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Posting Batch](posting-batch.md) | contains | [Ledger Entry](ledger-entry.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
