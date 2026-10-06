---
type: entity
title: "Site Survey"
---

# Site Survey

Domain: [Crane Rental](../README.md). ABE: [Lift Request](README.md).

## Definition and detail

A controlled assessment of the site, load path, access, setup area, hazards, and coordination requirements.

Logical attributes: Survey Identifier; Survey Status; Survey Date; Surveyor; Site; Request; Findings; Media Reference; Recommended Action; Approval Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#site-survey) | Site Survey |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](lift-request.md) | receives | [Site Survey](site-survey.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
