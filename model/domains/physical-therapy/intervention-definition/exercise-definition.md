---
type: entity
title: "Exercise Definition"
---

# Exercise Definition

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

## Definition and detail

A reusable definition of a movement or activity that may be prescribed or performed.

Logical attributes: Exercise Identifier; Exercise Name; Exercise Category; Instructions; Media Reference; Default Precautions; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#exercise-definition) | Exercise Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Exercise Prescription](exercise-prescription.md) | references | [Exercise Definition](exercise-definition.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
