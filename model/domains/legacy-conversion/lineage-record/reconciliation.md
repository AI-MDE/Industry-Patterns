---
type: entity
title: "Reconciliation"
---

# Reconciliation

Domain: [Legacy Conversion](../README.md). ABE: [Lineage Record](README.md).

## Definition and detail

A controlled comparison between source scope and target results.

Logical attributes: Reconciliation Identifier; Reconciliation Type; Status; Source Count; Target Count; Source Total; Target Total; Difference; Tolerance; Evaluated At; Approved By.

Reconciliation types include record count, control total, monetary total, balance, status distribution, relationship count, hash, and sampled semantic comparison.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#reconciliation) | Reconciliation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reconciliation](reconciliation.md) | evaluates | Migration Batch or Wave (review) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
