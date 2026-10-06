---
type: entity
title: "Field Mapping"
---

# Field Mapping

Domain: [Legacy Conversion](../README.md). ABE: [Mapping Specification](README.md).

## Definition and detail

A mapping from one or more Source Fields to a Canonical Attribute or Target Field.

Logical attributes: Field Mapping Identifier; Mapping Type; Source Expression; Target Attribute; Required Indicator; Default Rule; Null Handling; Sequence.

Mapping types include direct, rename, concatenate, split, derive, lookup, aggregate, classify, ignore, and manual.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#field-mapping) | Field Mapping |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Mapping Specification](mapping-specification.md) | contains | [Field Mapping](field-mapping.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Field Mapping](field-mapping.md) | reads | [Source Field](../system/source-field.md) | M:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Field Mapping](field-mapping.md) | writes | [Canonical Attribute](../canonical-concept/canonical-attribute.md) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Field Mapping](field-mapping.md) | uses | Transformation Rule or Value Mapping (review) | M:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
