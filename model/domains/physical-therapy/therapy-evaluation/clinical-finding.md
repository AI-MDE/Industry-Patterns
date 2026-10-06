---
type: entity
title: "Clinical Finding"
---

# Clinical Finding

Domain: [Physical Therapy](../README.md). ABE: [Therapy Evaluation](README.md).

Specializes: [Observation](../../health-care/clinical-note/observation.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A measured, observed, tested, or asserted fact recorded during evaluation or treatment.

Logical attributes: Finding Identifier; Finding Type; Code; Status; Observed Date/Time; Value; Unit; Body Region; Side; Method; Position; Interpretation; Performer; Source.

Finding types may include pain, range of motion, strength, sensation, posture, gait, balance, edema, endurance, coordination, mobility, and special-test results.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#clinical-finding) | Clinical Finding |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Evaluation](therapy-evaluation.md) | records | [Clinical Finding](clinical-finding.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
