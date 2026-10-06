---
type: primary-entity
title: "Physical Therapy Clinic"
---

# Physical Therapy Clinic

Domain: [Physical Therapy](../README.md). ABE: [Physical Therapy Clinic](README.md).

Specializes: [Health Care Organization](../../health-care/health-care-organization/health-care-organization.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Health Care Organization or organizational unit responsible for providing physical therapy services.

Logical attributes: Clinic Identifier; Clinic Name; Clinic Type; Clinic Status; Legal Entity; Operating Hours; Contact; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#physical-therapy-clinic) | Physical Therapy Clinic |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Physical Therapy Clinic](physical-therapy-clinic.md) | operates | [Clinic Location](clinic-location.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
