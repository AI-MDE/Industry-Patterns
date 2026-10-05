---
type: entity
title: "Target Record"
---

# Target Record

Domain: [Legacy Conversion](../README.md). ABE: [Canonical Concept](README.md).

## Definition and detail

A created or updated representation of a Canonical Concept in a Target Store.

Logical attributes: Target Record Identifier; Target Key; Canonical Concept; Created At; Updated At; Target Version; Record Status; Record Hash.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#target-record) | Target Record |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Target Store](target-store.md) | contains | [Target Record](target-record.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Item](../migration-plan/migration-item.md) | creates or updates | [Target Record](target-record.md) | M:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
