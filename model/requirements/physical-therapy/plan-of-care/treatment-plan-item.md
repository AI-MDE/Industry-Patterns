---
type: entity
title: "Treatment Plan Item"
---

# Treatment Plan Item

Domain: [Physical Therapy](../README.md). ABE: [Plan of Care](README.md).

Specializes: [Planned Activity](../../health-care/service-request/planned-activity.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A planned category of intervention, education, monitoring, or coordination within a Plan of Care.

Logical attributes: Plan Item Identifier; Intervention Type; Plan Item Status; Intended Frequency; Intended Duration; Dosage Guidance; Responsible Role; Goal Reference; Precaution Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#treatment-plan-item) | Treatment Plan Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Plan of Care](plan-of-care.md) | contains | [Treatment Plan Item](treatment-plan-item.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
