---
type: entity
title: "Therapy Provider"
---

# Therapy Provider

Domain: [Physical Therapy](../README.md). ABE: [Physical Therapy Clinic](README.md).

Specializes: [Provider](../../health-care/health-care-organization/provider.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Practitioner acting as a Physical Therapist, Physical Therapist Assistant, aide, or other permitted care role.

Logical attributes: Provider Identifier; Provider Type; Professional Status; Specialty; License Reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-provider) | Therapy Provider |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Provider](therapy-provider.md) | receives | [Provider Assignment](provider-assignment.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
