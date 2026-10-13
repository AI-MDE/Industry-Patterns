---
type: entity
title: "Condition"
---

# Condition

Subject: [Health Care](../README.md). ABE: [Observation](README.md).

## Definition and detail

A health concern, problem, disease, symptom, or other condition associated with a Patient.

Logical attributes: Condition Identifier; Condition Code; Clinical Status; Verification Status; Onset Date; Abatement Date; Severity; Body Site; Recorded Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#condition) | Condition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Patient](../patient/patient.md) | has | Condition | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Diagnosis](diagnosis.md) | may assert | Condition | M:1 | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Belongs to a Patient; may be asserted by Diagnoses and addressed by Care Plans.

## Operations

- record
- verify
- update-clinical-status
- mark-entered-in-error

## States

provisional; confirmed; active; inactive; resolved; entered-in-error

## Rules

- [clinical-assertion-requires-provenance](../rules/clinical-assertion-requires-provenance.md)
