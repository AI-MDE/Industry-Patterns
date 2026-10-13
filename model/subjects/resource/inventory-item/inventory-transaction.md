---
type: entity
title: "Inventory Transaction"
---

# Inventory Transaction

Subject: [Resources and Assets](../README.md). ABE: [Inventory Item](README.md).

Also known as: Material Issue (Manufacturing).

## Definition and detail

A movement, receipt, issue, return, adjustment, transfer, quarantine, or disposition of inventory.

Logical attributes: Transaction Identifier; Transaction Type; Status; Transaction Time; Part; Quantity; Unit; From Location; To Location; Lot or Serial; Source Reference.

### In industries

- **Material Issue** (Manufacturing): Evidence that material was supplied to production. Attributes: Issue Identifier; Order; Operation; Part Revision; Lot or Serial; Quantity; Unit; Issued At; Issued By; Source Location.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#inventory-transaction) | Inventory Transaction |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#material-issue) | Material Issue |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Operation Execution](../../production/production-run/operation-execution.md) | consumes | Material Issue | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
