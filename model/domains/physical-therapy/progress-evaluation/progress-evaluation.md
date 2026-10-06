---
type: primary-entity
title: "Progress Evaluation"
---

# Progress Evaluation

Domain: [Physical Therapy](../README.md). ABE: [Progress Evaluation](README.md).

## Definition and detail

A periodic comparison of Patient status with baseline, prior results, Plan of Care, and Therapy Goals.

Logical attributes: Progress Evaluation Identifier; Evaluation Date; Evaluator; Episode; Plan Version; Visit Range; Progress Summary; Continued Skilled Need; Recommendation.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#progress-evaluation) | Progress Evaluation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../therapy-episode/therapy-episode.md) | receives | [Progress Evaluation](progress-evaluation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
