---
type: entity
title: "Source Field"
---

# Source Field

Domain: [Legacy Conversion](../README.md). ABE: [System](README.md).

## Definition and detail

A named source data element.

Logical attributes: Source Field Identifier; Field Name; Description; Data Type; Length; Nullable Indicator; Format; Default Value; Code Set; Sensitivity Classification.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#source-field) | Source Field |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Source Entity](source-entity.md) | defines | [Source Field](source-field.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Field Mapping](../mapping-specification/field-mapping.md) | reads | [Source Field](source-field.md) | M:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
