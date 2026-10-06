---
type: entity
title: "Resolution"
---

# Resolution

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

The approved disposition of an Exception or Finding.

Logical attributes: Resolution Identifier; Resolution Type; Decision; Corrective Action; Decided By; Decided At; Reason; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#resolution) | Resolution |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Exception](exception.md) | is resolved by | [Resolution](resolution.md) | 1:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
