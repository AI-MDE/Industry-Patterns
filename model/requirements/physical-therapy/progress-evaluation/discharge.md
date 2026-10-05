---
type: entity
title: "Discharge"
---

# Discharge

Domain: [Physical Therapy](../README.md). ABE: [Progress Evaluation](README.md).

## Definition and detail

The clinical and administrative conclusion or transition of a Therapy Episode.

Logical attributes: Discharge Identifier; Discharge Date; Discharge Status; Disposition; Reason; Discharging Therapist; Goal Summary; Functional Status; Follow-up Plan; Referral Recommendation.

Discharge reasons may include goals met, maximum benefit, independent self-management, transfer, medical change, non-attendance, authorization exhausted, Patient choice, or administrative closure.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#discharge) | Discharge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../therapy-episode/therapy-episode.md) | concludes with | [Discharge](discharge.md) | 1:0..1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Discharge](discharge.md) | produces | [Discharge Summary](discharge-summary.md) | 1:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
