---
type: entity
title: "Goal Progress"
---

# Goal Progress

Domain: [Physical Therapy](../README.md). ABE: [Plan of Care](README.md).

## Definition and detail

An evidence-based assessment of progress toward a Therapy Goal.

Logical attributes: Progress Identifier; Goal; Assessment Date; Progress Status; Measured Value; Percent Progress; Evidence; Assessed By; Comment.

Progress statuses may include not started, progressing, met, partially met, not met, regressed, deferred, and discontinued.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#goal-progress) | Goal Progress |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Goal](therapy-goal.md) | receives | [Goal Progress](goal-progress.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
