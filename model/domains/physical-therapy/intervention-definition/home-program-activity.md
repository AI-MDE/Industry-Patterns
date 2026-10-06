---
type: entity
title: "Home Program Activity"
---

# Home Program Activity

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

## Definition and detail

A record of Patient-reported or remotely observed home-program performance.

Logical attributes: Activity Identifier; Program; Activity Date; Exercise Prescription; Completion Status; Quantity; Symptom Response; Patient Comment; Source.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#home-program-activity) | Home Program Activity |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Home Exercise Program](home-exercise-program.md) | receives | [Home Program Activity](home-program-activity.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
