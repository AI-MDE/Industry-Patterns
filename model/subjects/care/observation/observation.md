---
type: entity
title: "Observation"
---

# Observation

Subject: [Health Care](../README.md). ABE: [Observation](README.md).

Specializes: [Measurement](../../measurement/measure/measurement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A measured, asserted, or observed fact about a Patient or specimen.

Logical attributes: Observation Identifier; Observation Code; Observation Status; Observed Date/Time; Value; Unit; Interpretation; Method; Body Site; Reference Range; Performer; Source.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#observation) | Observation |

## Business participation

Concerns a Patient; is recorded in an Encounter or produced by Service Delivery.

## Operations

- record
- validate
- finalize
- correct
- supersede

## States

registered; preliminary; final; amended; corrected; cancelled; entered-in-error

## Rules

- [observation-requires-subject-time-source](../rules/observation-requires-subject-time-source.md)
- [finalized-records-preserve-history](../rules/finalized-records-preserve-history.md)
