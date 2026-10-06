---
type: entity
title: "Material Issue"
---

# Material Issue

Domain: [Manufacturing](../README.md). ABE: [Inventory Item](README.md).

## Definition and detail

Evidence that material was supplied to production.

Logical attributes: Issue Identifier; Order; Operation; Part Revision; Lot or Serial; Quantity; Unit; Issued At; Issued By; Source Location.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#material-issue) | Material Issue |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Operation Execution](../production-run/operation-execution.md) | consumes | [Material Issue](material-issue.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
