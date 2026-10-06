---
type: entity
title: "Episode of Care"
---

# Episode of Care

Domain: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A period during which related care is coordinated toward a health concern or objective.

Logical attributes: Episode Identifier; Episode Type; Episode Status; Start Date; End Date; Managing Organization; Primary Coordinator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#episode-of-care) | Episode of Care |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Episode of Care](episode-of-care.md) | groups | [Encounter](encounter.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
