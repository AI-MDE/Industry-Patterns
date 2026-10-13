---
type: entity
title: "System"
---

# System

Subject: [Information Governance](../README.md). ABE: [System](README.md).

## Definition and detail

A bounded application, service, file-based process, database, or external provider that stores or processes business information.

Logical attributes: System Identifier; System Name; System Type; System Status; Owner; Vendor; Version; Environment; Time Zone; Character Encoding; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/legacy-conversion.md](../../../../modeling-patterns/data-migration.md#system) | System |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| System | provides | [Source Dataset](../../../../modeling-patterns/data-migration.md) | 1:M | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
| [System of Record Assignment](system-of-record-assignment.md) | assigns authority to | System | M:1 | [legacy-conversion](../../../../modeling-patterns/data-migration.md) |
