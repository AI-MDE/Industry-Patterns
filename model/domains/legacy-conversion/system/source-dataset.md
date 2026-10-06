---
type: entity
title: "Source Dataset"
---

# Source Dataset

Domain: [Legacy Conversion](../README.md). ABE: [System](README.md).

## Definition and detail

A defined collection of source information to be analyzed or converted.

Logical attributes: Dataset Identifier; Dataset Name; Dataset Type; Source System; Location Reference; Format; Schema Version; Extract Criteria; As-of Time; Record Count; Sensitivity Classification.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#source-dataset) | Source Dataset |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [System](system.md) | provides | [Source Dataset](source-dataset.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Source Dataset](source-dataset.md) | contains | [Source Entity](source-entity.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
