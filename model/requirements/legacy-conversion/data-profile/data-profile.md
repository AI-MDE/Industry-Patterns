---
type: primary-entity
title: "Data Profile"
---

# Data Profile

Domain: [Legacy Conversion](../README.md). ABE: [Data Profile](README.md).

## Definition and detail

Measured characteristics of a Dataset, Source Entity, or Source Field.

Logical attributes: Profile Identifier; Profiled At; Record Count; Null Count; Distinct Count; Minimum; Maximum; Pattern Summary; Sample Reference; Source Hash.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#data-profile) | Data Profile |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Data Profile](data-profile.md) | describes | Dataset, Entity, or Field (review) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
