---
type: entity
title: "Status History"
---

# Status History

Domain: [Work Management](../README.md). ABE: [Status Type](README.md).

## Definition and detail

Evidence that a subject entered or left a status.

Logical attributes: Status History Identifier; Entered At; Exited At; Reason; Changed By; Event Reference.

Rule: a status field alone is sufficient only when transition rules and history are not material. Otherwise, use the full lifecycle pattern.

## Equipment Service context

Immutable record of every status transition on tracked entities: subject, from/to status, when, who, and reason. Specializes cross-industry Status History.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#status-history) | Status History |
| [patterns/equipment-service.md](../../../../patterns/equipment-service.md#status-history) | Status History |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Business subject (review) | records | [Status History](status-history.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
