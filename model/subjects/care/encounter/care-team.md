---
type: entity
title: "Care Team"
---

# Care Team

Subject: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A group of participants responsible for an Episode, Case, Encounter, or Care Plan.

Logical attributes: Care Team Identifier; Care Team Name; Care Team Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#care-team) | Care Team |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Care Team | supports | Episode, Case, or Care Plan (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| Care Team | contains | [Care Team Member](../../party/party/party-role.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
