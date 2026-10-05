---
type: entity
title: "Exercise Prescription"
---

# Exercise Prescription

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

## Definition and detail

A Patient-specific exercise instruction within a clinic or Home Exercise Program.

Logical attributes: Prescription Identifier; Exercise Definition; Status; Sets; Repetitions; Duration; Frequency; Resistance; Hold Time; Side; Progression Criteria; Start Date; End Date; Prescribed By.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#exercise-prescription) | Exercise Prescription |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Home Exercise Program](home-exercise-program.md) | contains | [Exercise Prescription](exercise-prescription.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Exercise Prescription](exercise-prescription.md) | references | [Exercise Definition](exercise-definition.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
