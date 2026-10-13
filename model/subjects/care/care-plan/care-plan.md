---
type: entity
title: "Care Plan"
---

# Care Plan

Subject: [Health Care](../README.md). ABE: [Care Plan](README.md).

## Definition and detail

An organized set of goals and planned activities for a Patient.

Logical attributes: Care Plan Identifier; Care Plan Type; Care Plan Status; Start Date; End Date; Author; Description.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#care-plan) | Care Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Care Plan | contains | Care Goal and Planned Activity (review) | 1:M each | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Concerns one Patient; contains Goals and Planned Activities; is supported by a Care Team.

## Operations

- draft
- activate
- add-goal
- add-activity
- review
- complete
- revoke

## States

draft; active; on-hold; completed; revoked; entered-in-error

## Rules

- [care-plan-must-identify-accountable-provider](../rules/care-plan-must-identify-accountable-provider.md)
