---
type: primary-entity
title: "Therapy Evaluation"
---

# Therapy Evaluation

Domain: [Physical Therapy](../README.md). ABE: [Therapy Evaluation](README.md).

## Definition and detail

A structured clinical assessment performed to determine therapy needs, diagnosis or classification, prognosis, goals, and Plan of Care.

Logical attributes: Evaluation Identifier; Evaluation Type; Evaluation Status; Evaluation Date; Evaluating Therapist; Episode; Referral; Complexity; Clinical Impression; Prognosis; Recommendation.

Evaluation types may include initial evaluation, progress evaluation, reassessment, re-evaluation, screening, and discharge evaluation.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-evaluation) | Therapy Evaluation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../therapy-episode/therapy-episode.md) | contains | [Therapy Evaluation](therapy-evaluation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Evaluation](therapy-evaluation.md) | records | [Clinical Finding](clinical-finding.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Evaluation](therapy-evaluation.md) | produces | [Therapy Assessment](therapy-assessment.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
