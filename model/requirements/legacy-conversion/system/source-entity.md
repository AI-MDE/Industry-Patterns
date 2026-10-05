---
type: entity
title: "Source Entity"
---

# Source Entity

Domain: [Legacy Conversion](../README.md). ABE: [System](README.md).

## Definition and detail

A structural record type in the Source Dataset, such as a table, file record, message, document type, or API resource.

Logical attributes: Source Entity Identifier; Source Name; Description; Storage Type; Natural Key Description; Estimated Volume; Retention Period.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#source-entity) | Source Entity |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Source Dataset](source-dataset.md) | contains | [Source Entity](source-entity.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Source Entity](source-entity.md) | defines | [Source Field](source-field.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Source Entity](source-entity.md) | contains | [Source Record](source-record.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
