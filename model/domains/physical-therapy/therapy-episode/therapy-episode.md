---
type: primary-entity
title: "Therapy Episode"
---

# Therapy Episode

Domain: [Physical Therapy](../README.md). ABE: [Therapy Episode](README.md).

Specializes: [Episode of Care](../../health-care/encounter/episode-of-care.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Episode of Care grouping related physical therapy evaluation, plans, visits, outcomes, and discharge activity for a Patient concern.

Logical attributes: Episode Identifier; Episode Type; Episode Status; Start Date; End Date; Primary Concern; Referring Provider; Managing Therapist; Location; Outcome.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-episode) | Therapy Episode |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Patient](../../health-care/patient/patient.md) | has | [Therapy Episode](therapy-episode.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Referral](../../health-care/schedule/referral.md) | may initiate | [Therapy Episode](therapy-episode.md) | 1:0..M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | concerns | [Presenting Concern](presenting-concern.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | has | [Precaution or Contraindication](precaution-or-contraindication.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | has | [Functional Limitation](functional-limitation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | contains | [Therapy Evaluation](../therapy-evaluation/therapy-evaluation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | has | [Outcome Measure Result](../therapy-evaluation/outcome-measure-result.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | governed by | [Plan of Care](../plan-of-care/plan-of-care.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | contains | [Therapy Visit](../provider-schedule/therapy-visit.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | has | [Home Exercise Program](../intervention-definition/home-exercise-program.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | receives | [Progress Evaluation](../progress-evaluation/progress-evaluation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](therapy-episode.md) | concludes with | [Discharge](../progress-evaluation/discharge.md) | 1:0..1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
