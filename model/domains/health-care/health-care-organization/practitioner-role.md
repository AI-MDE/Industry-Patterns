---
type: entity
title: "Practitioner Role"
---

# Practitioner Role

Domain: [Health Care](../README.md). ABE: [Health Care Organization](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Provider's role within an Organization, Facility, specialty, or service context.

Logical attributes: Practitioner Role Identifier; Role Type; Specialty; Role Status; Effective From; Effective Through; Supervising Provider reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#practitioner-role) | Practitioner Role |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Provider](provider.md) | performs | [Practitioner Role](practitioner-role.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Practitioner Role](practitioner-role.md) | acts for | [Health Care Organization](health-care-organization.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
