---
type: primary-entity
title: "System"
---

# System

Domain: [Legacy Conversion](../README.md). ABE: [System](README.md).

## Definition and detail

A bounded application, service, file-based process, database, or external provider that stores or processes business information.

Logical attributes: System Identifier; System Name; System Type; System Status; Owner; Vendor; Version; Environment; Time Zone; Character Encoding; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#system) | System |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [System](system.md) | provides | [Source Dataset](source-dataset.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [System of Record Assignment](../system-of-record-assignment/system-of-record-assignment.md) | assigns authority to | [System](system.md) | M:1 | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
