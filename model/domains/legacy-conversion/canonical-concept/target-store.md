---
type: entity
title: "Target Store"
---

# Target Store

Domain: [Legacy Conversion](../README.md). ABE: [Canonical Concept](README.md).

## Definition and detail

The application, service, database, index, archive, or event stream that receives converted information.

Logical attributes: Target Store Identifier; Target Name; Target Type; Target System; Schema Version; Owner; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#target-store) | Target Store |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Target Store](target-store.md) | contains | [Target Record](target-record.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
