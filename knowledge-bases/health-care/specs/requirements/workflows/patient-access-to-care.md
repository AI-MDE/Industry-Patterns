---
type: workflow
title: "Patient Access To Care"
description: "Coordinate the journey from initial Patient request through completed Encounter."
tags: [health-care, industry-pattern, workflow]
---

# Patient Access To Care

## Purpose

Coordinate the journey from initial Patient request through completed Encounter.

## Trigger

A Patient or representative requests care.

## Participants / Roles

Patient; Related Person; Scheduler; Provider.

## Steps

1. [Register Patient](../use-cases/register-patient.md) when needed.
2. [Verify Coverage](../use-cases/verify-coverage.md) when applicable.
3. [Schedule Appointment](../use-cases/schedule-appointment.md).
4. [Check In Patient](../use-cases/check-in-patient.md).
5. [Conduct Encounter](../use-cases/conduct-encounter.md).

## Resulting States / Transitions

Patient active; Appointment fulfilled; Encounter completed.

## Exceptions / Alternate Paths

Possible duplicate identity; no capacity; urgent escalation; no-show; cancelled or incomplete Encounter.

## Related Use Cases

Linked in the steps above.

## Related Rules

- [patient-identity-must-be-traceable](../rules/patient-identity-must-be-traceable.md)
- [appointment-must-respect-availability](../rules/appointment-must-respect-availability.md)
- [minimum-necessary-access](../rules/minimum-necessary-access.md)
