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
| [patterns/health-care.md](../../../../patterns/health-care.md#appointment) | Appointment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Appointment](appointment.md) | includes | [Appointment Participant](appointment-participant.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Appointment](appointment.md) | may result in | [Encounter](../encounter/encounter.md) | 1:0..M | [health-care](../../../../patterns/health-care.md) |
