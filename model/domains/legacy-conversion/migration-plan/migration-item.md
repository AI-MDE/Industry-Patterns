---
type: entity
title: "Migration Item"
---

# Migration Item

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

The conversion outcome for one Source Record or logical group of records.

Logical attributes: Migration Item Identifier; Item Status; Source Record reference; Target Record reference; Attempt Number; Started At; Completed At; Result Code.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#migration-item) | Migration Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Migration Batch](migration-batch.md) | contains | [Migration Item](migration-item.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Item](migration-item.md) | reads | [Source Record](../system/source-record.md) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Item](migration-item.md) | creates or updates | [Target Record](../canonical-concept/target-record.md) | M:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Item](migration-item.md) | produces | Validation Result or Conversion Error (review) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
