---
type: primary-entity
title: "Patient"
---

# Patient

Domain: [Health Care](../README.md). ABE: [Patient](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Person acting as the subject or recipient of health care.

Logical attributes: Patient Identifier; Patient Status; Date of Birth; Administrative Sex; Preferred Name; Preferred Language; Deceased Indicator; Deceased Date; Primary Contact reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#patient) | Patient |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Person](../../party/party/person.md) | performs role of | [Patient](patient.md) | 1:M over time | [health-care](../../../../patterns/health-care.md) |
| [Patient](patient.md) | has | [Patient Identifier](patient-identifier.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Patient](patient.md) | relates to | [Related Person](related-person.md) | M:M | [health-care](../../../../patterns/health-care.md) |
| [Patient](patient.md) | participates in | [Encounter](../encounter/encounter.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Medical Case](../encounter/medical-case.md) | concerns | [Patient](patient.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Patient](patient.md) | has | [Condition](../clinical-note/condition.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Coverage](../coverage/coverage.md) | covers | [Patient](patient.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Patient](patient.md) | has | [Therapy Episode](../../physical-therapy/therapy-episode/therapy-episode.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
