---
type: primary-entity
title: "Plan of Care"
---

# Plan of Care

Domain: [Physical Therapy](../README.md). ABE: [Plan of Care](README.md).

Specializes: [Care Plan](../../health-care/service-request/care-plan.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An effective-dated clinical plan governing the intended physical therapy services for an Episode.

Logical attributes: Plan Identifier; Plan Status; Version; Authored Date; Effective From; Effective Through; Responsible Therapist; Frequency; Duration; Certification Due Date; Medical Necessity Rationale.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#plan-of-care) | Plan of Care |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../therapy-episode/therapy-episode.md) | governed by | [Plan of Care](plan-of-care.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Plan of Care](plan-of-care.md) | contains | [Therapy Goal](therapy-goal.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Plan of Care](plan-of-care.md) | contains | [Treatment Plan Item](treatment-plan-item.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Plan of Care](plan-of-care.md) | receives | Approval or Certification (review) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
