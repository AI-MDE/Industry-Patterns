---
type: entity
title: "Home Exercise Program"
---

# Home Exercise Program

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

## Definition and detail

A versioned set of Patient instructions, exercises, education, precautions, and progression guidance intended outside supervised Visits.

Logical attributes: Program Identifier; Program Status; Version; Issued Date; Effective From; Effective Through; Patient; Episode; Prescribing Therapist; Delivery Method; Language.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#home-exercise-program) | Home Exercise Program |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Home Exercise Program](home-exercise-program.md) | contains | [Exercise Prescription](exercise-prescription.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](../therapy-episode/therapy-episode.md) | has | [Home Exercise Program](home-exercise-program.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Home Exercise Program](home-exercise-program.md) | receives | [Home Program Activity](home-program-activity.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
