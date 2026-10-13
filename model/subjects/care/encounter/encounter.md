---
type: entity
title: "Encounter"
---

# Encounter

Subject: [Health Care](../README.md). ABE: [Encounter](README.md).

Specializes: [Service Event](../../work/service-event/service-event.md). Inherit its meaning; apply the refinements below in this context.

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
| [Appointment](../../scheduling/appointment/appointment.md) | may result in | Encounter | 1:0..M | [health-care](../../../../industry-patterns/health-care.md) |
| [Patient](../patient/patient.md) | participates in | Encounter | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Provider](../health-care-organization/provider.md) | participates in | Encounter | M:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Episode of Care](episode-of-care.md) | groups | Encounter | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Encounter | records | Observation, Diagnosis, Procedure, or Clinical Note (review) | 1:M each | [health-care](../../../../industry-patterns/health-care.md) |

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
