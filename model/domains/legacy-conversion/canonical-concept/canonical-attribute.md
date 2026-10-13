---
type: entity
title: "Canonical Attribute"
---

# Canonical Attribute

Domain: [Legacy Conversion](../README.md). ABE: [Canonical Concept](README.md).

## Definition and detail

A defined fact belonging to a Canonical Concept.

Logical attributes: Attribute Identifier; Attribute Name; Definition; Logical Type; Required Indicator; Multiplicity; Classification Scheme reference; Constraint reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/legacy-conversion.md](../../../../industry-patterns/legacy-conversion.md#canonical-attribute) | Canonical Attribute |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Canonical Concept](canonical-concept.md) | defines | [Canonical Attribute](canonical-attribute.md) | 1:M | [legacy-conversion](../../../../industry-patterns/legacy-conversion.md) |
| [Field Mapping](../mapping-specification/field-mapping.md) | writes | [Canonical Attribute](canonical-attribute.md) | M:1 | [legacy-conversion](../../../../industry-patterns/legacy-conversion.md) |
