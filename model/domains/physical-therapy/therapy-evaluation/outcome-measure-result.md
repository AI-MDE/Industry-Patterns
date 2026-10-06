---
type: entity
title: "Outcome Measure Result"
---

# Outcome Measure Result

Domain: [Physical Therapy](../README.md). ABE: [Therapy Evaluation](README.md).

Specializes: [Measurement](../../measurement/measure/measurement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A scored result for a Patient at a declared point in the Episode.

Logical attributes: Result Identifier; Measure Definition; Assessment Date; Raw Responses Reference; Score; Unit; Interpretation; Completed By; Administered By; Episode; Visit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#outcome-measure-result) | Outcome Measure Result |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../therapy-episode/therapy-episode.md) | has | [Outcome Measure Result](outcome-measure-result.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
