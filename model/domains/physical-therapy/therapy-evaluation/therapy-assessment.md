---
type: entity
title: "Therapy Assessment"
---

# Therapy Assessment

Domain: [Physical Therapy](../README.md). ABE: [Therapy Evaluation](README.md).

## Definition and detail

The Therapist's reasoned synthesis of history, findings, function, response, prognosis, and need for skilled care.

Logical attributes: Assessment Identifier; Assessment Status; Authored Date; Author; Clinical Classification; Problem Summary; Skilled Need; Prognosis; Rationale; Evidence Reference.

Rule: raw findings, standardized outcome scores, and the Therapist's clinical assessment remain distinct and traceable.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-assessment) | Therapy Assessment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Evaluation](therapy-evaluation.md) | produces | [Therapy Assessment](therapy-assessment.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
