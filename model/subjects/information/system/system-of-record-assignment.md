---
type: entity
title: "System of Record Assignment"
---

# System of Record Assignment

Subject: [Information Governance](../README.md). ABE: [System](README.md).

## Definition and detail

A time-bounded declaration of which System is authoritative for a Canonical Concept, attribute, population, or operation.

Logical attributes: Assignment Identifier; Scope; Authority Type; System; Effective From; Effective Through; Priority.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/legacy-conversion.md](../../../../modeling-patterns/data-migration.md#system-of-record-assignment) | System of Record Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| System of Record Assignment | assigns authority to | [System](system.md) | M:1 | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
| [Cutover Event](../../../../modeling-patterns/data-migration.md) | activates | System of Record Assignment | 1:M | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
