---
type: entity
title: "Reconciliation"
---

# Reconciliation

Subject: [Billing and Payments](../README.md). ABE: [Payment](README.md).

## Definition and detail

A comparison of internal and external records to identify matches, breaks, and required corrections.

Logical attributes: Reconciliation Identifier; Reconciliation Type; Period; Status; Source A; Source B; Matched Count; Exception Count; Completed Time.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#reconciliation) | Reconciliation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Reconciliation | compares | Transactions, entries, or external items (review) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Reconciliation | identifies | [Reconciliation Exception](../../case/case/exception.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
