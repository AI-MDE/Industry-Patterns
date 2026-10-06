---
type: entity
title: "Data Quality Rule"
---

# Data Quality Rule

Domain: [Legacy Conversion](../README.md). ABE: [Data Profile](README.md).

## Definition and detail

A test of completeness, validity, consistency, uniqueness, timeliness, or referential integrity.

Logical attributes: Quality Rule Identifier; Rule Name; Quality Dimension; Rule Expression; Severity; Threshold; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#data-quality-rule) | Data Quality Rule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Data Quality Rule](data-quality-rule.md) | produces | [Data Quality Finding](data-quality-finding.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
