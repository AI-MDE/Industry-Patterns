---
type: entity
title: "Appointment"
---

# Appointment

Domain: [Health Care](../README.md). ABE: [Schedule](README.md).

## Definition and detail

A planned allocation of time and resources for a Patient to receive or discuss care.

Logical attributes: Appointment Identifier; Appointment Type; Appointment Status; Scheduled Start; Scheduled End; Priority; Reason; Channel; Cancellation Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#appointment) | Appointment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Appointment](appointment.md) | includes | [Appointment Participant](appointment-participant.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Appointment](appointment.md) | may result in | [Encounter](../encounter/encounter.md) | 1:0..M | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Includes Patient, Provider, Location, and other participants; may result in Encounters.

## Operations

- request
- book
- reschedule
- cancel
- check-in
- mark-no-show

## States

proposed; booked; arrived; in-progress; fulfilled; waitlisted; no-show; cancelled

## Rules

- [appointment-must-respect-availability](../rules/appointment-must-respect-availability.md)
