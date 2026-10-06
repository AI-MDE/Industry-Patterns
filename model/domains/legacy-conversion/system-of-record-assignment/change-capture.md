---
type: entity
title: "Change Capture"
---

# Change Capture

Domain: [Legacy Conversion](../README.md). ABE: [System of Record Assignment](README.md).

## Definition and detail

Evidence of a source change offered for synchronization.

Logical attributes: Change Identifier; Source Record; Change Type; Source Version; Occurred At; Captured At; Sequence; Payload Hash.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#change-capture) | Change Capture |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Change Capture](change-capture.md) | may create | [Conflict](conflict.md) | M:0..M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
