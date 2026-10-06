---
type: entity
title: "Exception"
---

# Exception

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

A business or governance decision required because automated processing cannot safely determine the result.

Logical attributes: Exception Identifier; Exception Type; Exception Status; Severity; Opened At; Owner; Due Date; Business Impact.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#exception) | Exception |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Exception](exception.md) | is resolved by | [Resolution](resolution.md) | 1:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
