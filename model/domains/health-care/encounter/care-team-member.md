---
type: entity
title: "Care Team Member"
---

# Care Team Member

Domain: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A Party Role's participation in a Care Team.

Logical attributes: Membership Identifier; Team Role; Membership Status; Effective From; Effective Through; Responsibility.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#care-team-member) | Care Team Member |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Care Team](care-team.md) | contains | [Care Team Member](care-team-member.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
