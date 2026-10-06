---
type: entity
title: "Project"
---

# Project

Domain: [Crane Rental](../README.md). ABE: [Customer Account](README.md).

Specializes: [Work Effort](../../work-management/work-effort/work-effort.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Customer initiative or construction, industrial, infrastructure, energy, maintenance, or event context containing one or more crane Jobs.

Logical attributes: Project Identifier; Project Name; Project Type; Project Status; Customer; General Contractor; Start Date; End Date; Primary Site.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#project) | Project |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | sponsors | [Project](project.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Project](project.md) | contains | [Job Order](../rental-offering/job-order.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
