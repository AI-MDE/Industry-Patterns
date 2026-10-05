---
type: entity
title: "Data Quality Finding"
---

# Data Quality Finding

Domain: [Legacy Conversion](../README.md). ABE: [Data Profile](README.md).

## Definition and detail

Evidence that source or converted data satisfied or violated a Data Quality Rule.

Logical attributes: Finding Identifier; Finding Status; Observed At; Observed Value; Expected Condition; Severity; Affected Record Count; Sample Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#data-quality-finding) | Data Quality Finding |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Data Quality Rule](data-quality-rule.md) | produces | [Data Quality Finding](data-quality-finding.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
