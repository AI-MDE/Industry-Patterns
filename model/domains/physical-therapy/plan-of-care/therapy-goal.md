---
type: entity
title: "Therapy Goal"
---

# Therapy Goal

Domain: [Physical Therapy](../README.md). ABE: [Plan of Care](README.md).

Specializes: [Care Goal](../../health-care/service-request/care-goal.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A measurable desired improvement in impairment, activity, participation, self-management, or risk.

Logical attributes: Goal Identifier; Goal Type; Goal Status; Description; Baseline Value; Target Value; Unit; Target Date; Priority; Patient Agreement; Outcome Measure Reference.

Goal types may include short-term, long-term, maintenance, prevention, or Patient-defined goals.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-goal) | Therapy Goal |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Plan of Care](plan-of-care.md) | contains | [Therapy Goal](therapy-goal.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Goal](therapy-goal.md) | receives | [Goal Progress](goal-progress.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Intervention Delivery](../intervention-definition/intervention-delivery.md) | supports | [Therapy Goal](therapy-goal.md) | M:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
