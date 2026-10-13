---
type: entity
title: "Data Quality Rule"
---

# Data Quality Rule

Subject: [Information Governance](../README.md). ABE: [Data Quality Rule](README.md).

## Definition and detail

A test of completeness, validity, consistency, uniqueness, timeliness, or referential integrity.

Logical attributes: Quality Rule Identifier; Rule Name; Quality Dimension; Rule Expression; Severity; Threshold; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/legacy-conversion.md](../../../../modeling-patterns/data-migration.md#data-quality-rule) | Data Quality Rule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Data Quality Rule | produces | [Data Quality Finding](data-quality-finding.md) | 1:M | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
