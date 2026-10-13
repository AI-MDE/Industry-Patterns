---
type: entity
title: "Site Assessment"
---

# Site Assessment

Subject: [Locations and Sites](../README.md). ABE: [Site](README.md).

Also known as: Site Survey (Crane Rental).

## Definition and detail

An assessment of conditions, access, measurements, requirements and risks at a Service Site before work is estimated or scheduled.

### In industries

- **Site Survey** (Crane Rental): A controlled assessment of the site, load path, access, setup area, hazards, and coordination requirements. Attributes: Survey Identifier; Survey Status; Survey Date; Surveyor; Site; Request; Findings; Media Reference; Recommended Action; Approval Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#site-survey) | Site Survey |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](../../../../industry-patterns/crane-rental-orchestration.md#concepts-applications-typically-add) | receives | Site Survey | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |

## Relationships and rules

- Belongs to or references a Service Site.
- Preserve the original record when accepted or consumed; distinguish planned, actual and financial quantities.
