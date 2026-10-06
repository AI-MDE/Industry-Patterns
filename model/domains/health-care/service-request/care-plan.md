---
type: entity
title: "Care Plan"
---

# Care Plan

Domain: [Health Care](../README.md). ABE: [Service Request](README.md).

## Definition and detail

An organized set of goals and planned activities for a Patient.

Logical attributes: Care Plan Identifier; Care Plan Type; Care Plan Status; Start Date; End Date; Author; Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#care-plan) | Care Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Care Plan](care-plan.md) | contains | Care Goal and Planned Activity (review) | 1:M each | [health-care](../../../../patterns/health-care.md) |
