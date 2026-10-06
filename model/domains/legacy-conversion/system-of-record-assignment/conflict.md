---
type: entity
title: "Conflict"
---

# Conflict

Domain: [Legacy Conversion](../README.md). ABE: [System of Record Assignment](README.md).

## Definition and detail

Competing changes or assertions that violate ownership, ordering, or consistency rules.

Logical attributes: Conflict Identifier; Conflict Type; Conflict Status; Detected At; Source Assertions; Resolution Policy; Resolved At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#conflict) | Conflict |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Change Capture](change-capture.md) | may create | [Conflict](conflict.md) | M:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
