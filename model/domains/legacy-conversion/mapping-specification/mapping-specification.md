---
type: primary-entity
title: "Mapping Specification"
---

# Mapping Specification

Domain: [Legacy Conversion](../README.md). ABE: [Mapping Specification](README.md).

## Definition and detail

A versioned declaration of how source structures and meanings correspond to canonical and target concepts.

Logical attributes: Mapping Identifier; Mapping Name; Mapping Version; Mapping Status; Source Schema Version; Target Model Version; Effective From; Effective Through; Approved By; Approved At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#mapping-specification) | Mapping Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Mapping Specification](mapping-specification.md) | contains | [Field Mapping](field-mapping.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
