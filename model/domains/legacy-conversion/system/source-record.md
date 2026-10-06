---
type: entity
title: "Source Record"
---

# Source Record

Domain: [Legacy Conversion](../README.md). ABE: [System](README.md).

## Definition and detail

One observed record from a Source Entity at a particular extraction point.

Logical attributes: Source Record Identifier; Source Key; Extracted At; Source Version; Source Timestamp; Raw Hash; Record Status.

Rule: Source Record identity must be stable enough to reproduce or explain a conversion result.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#source-record) | Source Record |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Source Entity](source-entity.md) | contains | [Source Record](source-record.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Source Record](source-record.md) | corresponds through | [Record Link](../external-identifier/record-link.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Item](../migration-plan/migration-item.md) | reads | [Source Record](source-record.md) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
