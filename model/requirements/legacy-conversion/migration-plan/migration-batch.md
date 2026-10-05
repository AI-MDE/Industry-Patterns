---
type: entity
title: "Migration Batch"
---

# Migration Batch

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

One repeatable execution of an approved Mapping Specification against an identified source extract.

Logical attributes: Batch Identifier; Batch Type; Batch Status; Started At; Completed At; Source Extract reference; Mapping Version; Target Version; Submitted Count; Succeeded Count; Failed Count; Operator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#migration-batch) | Migration Batch |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Migration Wave](migration-wave.md) | executes through | [Migration Batch](migration-batch.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Batch](migration-batch.md) | contains | [Migration Item](migration-item.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
