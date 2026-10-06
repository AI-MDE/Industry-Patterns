---
type: primary-entity
title: "Lineage Record"
---

# Lineage Record

Domain: [Legacy Conversion](../README.md). ABE: [Lineage Record](README.md).

## Definition and detail

Evidence connecting a target fact to its source records, mapping, transformation, execution, and decisions.

Logical attributes: Lineage Identifier; Target Record; Target Attribute; Source Record; Source Field; Mapping Version; Transformation Rule Version; Batch; Created At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#lineage-record) | Lineage Record |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lineage Record](lineage-record.md) | connects | Source Field and Target Attribute (review) | M:1 each | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
