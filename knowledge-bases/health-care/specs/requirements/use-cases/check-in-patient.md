---
type: use-case
title: "Check In Patient"
description: "Confirm arrival and readiness for a booked Appointment."
tags: [health-care, industry-pattern, use-case]
---

# Check In Patient

## Goal

Confirm arrival and readiness for a booked Appointment.

## Actors

Patient, Related Person, or Scheduler.

## Trigger

Patient arrives physically or virtually.

## Preconditions

Appointment exists or walk-in policy applies.

## Input

Appointment, identity confirmation, arrival time, required forms.

## Context

Access and Scheduling.

## Flow

1. Confirm Patient and Appointment.
2. Verify required administrative information.
3. Record arrival.
4. Notify care team.
5. Create or link Encounter when appropriate.

## Alternatives / Conditions

Late arrival; wrong Patient; missing prerequisite; walk-in.

## Outcome

Patient is ready for care or exception is routed.

## Output

Arrival and readiness status.

## Postconditions

Appointment and Encounter linkage is recorded.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

Appointment.check-in; Encounter.start

## Related Pages

Check-In — design references only; page specifications are outside this reusable requirements knowledge base.
