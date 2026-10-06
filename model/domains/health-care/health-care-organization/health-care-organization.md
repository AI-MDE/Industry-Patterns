---
type: primary-entity
title: "Health Care Organization"
---

# Health Care Organization

Domain: [Health Care](../README.md). ABE: [Health Care Organization](README.md).

Specializes: [Organization](../../party/party/organization.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An organization responsible for arranging, governing, funding, or delivering health-care services.

Logical attributes: Organization Identifier; Organization Name; Organization Type; Organization Status; Accreditation reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#health-care-organization) | Health Care Organization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Health Care Organization](health-care-organization.md) | operates | [Facility](facility.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Practitioner Role](practitioner-role.md) | acts for | [Health Care Organization](health-care-organization.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
