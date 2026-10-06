---
type: entity
title: "Visit Note"
---

# Visit Note

Domain: [Physical Therapy](../README.md). ABE: [Provider Schedule](README.md).

Specializes: [Clinical Note](../../health-care/clinical-note/clinical-note.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A versioned clinical document describing the Visit.

Logical attributes: Note Identifier; Note Type; Note Status; Authored At; Author; Signed At; Signer; Visit; Plan Version; Version; Supersedes Note; Amendment Reason.

Common logical sections include subjective report, objective findings, interventions, response, assessment, plan, education, and required attestations.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#visit-note) | Visit Note |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Visit](therapy-visit.md) | has | [Visit Note](visit-note.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
