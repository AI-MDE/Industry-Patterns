---
type: primary-entity
title: "Cutover Event"
---

# Cutover Event

Domain: [Legacy Conversion](../README.md). ABE: [Cutover Event](README.md).

## Definition and detail

The controlled transfer of operational responsibility from one system configuration to another.

Logical attributes: Cutover Identifier; Cutover Type; Cutover Status; Planned At; Started At; Completed At; Decision Authority; Rollback Deadline.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#cutover-event) | Cutover Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Cutover Event](cutover-event.md) | activates | [System of Record Assignment](../system-of-record-assignment/system-of-record-assignment.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
