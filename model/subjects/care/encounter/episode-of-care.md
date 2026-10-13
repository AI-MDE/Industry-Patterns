---
type: entity
title: "Episode of Care"
---

# Episode of Care

Subject: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A period during which related care is coordinated toward a health concern or objective.

Logical attributes: Episode Identifier; Episode Type; Episode Status; Start Date; End Date; Managing Organization; Primary Coordinator.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#episode-of-care) | Episode of Care |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Episode of Care | groups | [Encounter](encounter.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Groups Encounters, Care Plans, Service Requests, and outcomes for a Patient.

## Operations

- open
- add-encounter
- place-on-hold
- finish
- cancel

## States

planned; active; on-hold; finished; cancelled; entered-in-error

## Rules

- [episode-must-concern-one-patient](../rules/episode-must-concern-one-patient.md)
