---
type: primary-entity
title: "System of Record Assignment"
---

# System of Record Assignment

Domain: [Legacy Conversion](../README.md). ABE: [System of Record Assignment](README.md).

## Definition and detail

A time-bounded declaration of which System is authoritative for a Canonical Concept, attribute, population, or operation.

Logical attributes: Assignment Identifier; Scope; Authority Type; System; Effective From; Effective Through; Priority.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#system-of-record-assignment) | System of Record Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [System of Record Assignment](system-of-record-assignment.md) | assigns authority to | [System](../system/system.md) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Cutover Event](../cutover-event/cutover-event.md) | activates | [System of Record Assignment](system-of-record-assignment.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
