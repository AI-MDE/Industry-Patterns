---
type: primary-entity
title: "Encounter"
---

# Encounter

Domain: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A bounded interaction in which care is assessed, discussed, delivered, or documented.

Logical attributes: Encounter Identifier; Encounter Type; Encounter Status; Start Date/Time; End Date/Time; Service Setting; Priority; Reason; Disposition.

Examples: office visit, emergency visit, inpatient stay, telehealth visit, home visit, or asynchronous consultation.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#encounter) | Encounter |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Appointment](../schedule/appointment.md) | may result in | [Encounter](encounter.md) | 1:0..M | [health-care](../../../../industry-patterns/health-care.md) |
| [Patient](../patient/patient.md) | participates in | [Encounter](encounter.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Provider](../health-care-organization/provider.md) | participates in | [Encounter](encounter.md) | M:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Episode of Care](episode-of-care.md) | groups | [Encounter](encounter.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Encounter](encounter.md) | records | Observation, Diagnosis, Procedure, or Clinical Note (review) | 1:M each | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Concerns one Patient; has Provider participants; belongs to an Episode or Case; records clinical evidence.

## Operations

- start
- add-participant
- record-evidence
- complete
- correct

## States

planned; arrived; in-progress; on-hold; completed; cancelled; entered-in-error

## Rules

- [encounter-end-cannot-precede-start](../rules/encounter-end-cannot-precede-start.md)
- [finalized-records-preserve-history](../rules/finalized-records-preserve-history.md)
