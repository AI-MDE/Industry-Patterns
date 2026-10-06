---
type: entity
title: "Care Team"
---

# Care Team

Domain: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A group of participants responsible for an Episode, Case, Encounter, or Care Plan.

Logical attributes: Care Team Identifier; Care Team Name; Care Team Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#care-team) | Care Team |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Care Team](care-team.md) | supports | Episode, Case, or Care Plan (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Care Team](care-team.md) | contains | [Care Team Member](care-team-member.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
