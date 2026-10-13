---
type: entity
title: "Data Quality Finding"
---

# Data Quality Finding

Subject: [Information Governance](../README.md). ABE: [Data Quality Rule](README.md).

## Definition and detail

Evidence that source or converted data satisfied or violated a Data Quality Rule.

Logical attributes: Finding Identifier; Finding Status; Observed At; Observed Value; Expected Condition; Severity; Affected Record Count; Sample Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/legacy-conversion.md](../../../../modeling-patterns/data-migration.md#data-quality-finding) | Data Quality Finding |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Data Quality Rule](data-quality-rule.md) | produces | Data Quality Finding | 1:M | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
