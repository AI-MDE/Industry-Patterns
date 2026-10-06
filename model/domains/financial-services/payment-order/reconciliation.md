---
type: entity
title: "Reconciliation"
---

# Reconciliation

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

A comparison of internal and external records to identify matches, breaks, and required corrections.

Logical attributes: Reconciliation Identifier; Reconciliation Type; Period; Status; Source A; Source B; Matched Count; Exception Count; Completed Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#reconciliation) | Reconciliation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reconciliation](reconciliation.md) | compares | Transactions, entries, or external items (review) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Reconciliation](reconciliation.md) | identifies | [Reconciliation Exception](reconciliation-exception.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
