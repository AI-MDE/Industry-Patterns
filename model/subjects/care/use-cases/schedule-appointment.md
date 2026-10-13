---
type: use-case
title: "Schedule Appointment"
description: "Reserve suitable time and resources for a Patient need."
tags: [health-care, canonical-model, use-case]
---

# Schedule Appointment

## Goal

Reserve suitable time and resources for a Patient need.

## Actors

Patient, Related Person, or Scheduler.

## Trigger

A request for care is received.

## Preconditions

Patient or provisional identity and appointment need are known.

## Input

Service, priority, preferences, Provider, Location/channel, time constraints.

## Context

Access and Scheduling.

## Flow

1. Capture need and priority.
2. Find eligible availability.
3. Present alternatives.
4. Select slot and participants.
5. Validate capacity and prerequisites.
6. Book and notify.

## Alternatives / Conditions

Waitlist; referral required; no suitable capacity; urgent escalation.

## Outcome

Appointment is booked or a clear alternative is recorded.

## Output

Appointment details and instructions.

## Postconditions

Capacity is reserved and event recorded.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[Appointment.request](../../scheduling/appointment/appointment.md#operations); [Appointment.book](../../scheduling/appointment/appointment.md#operations)


## Role definitions

- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
- [Related Person](../roles/related-person.md)
- [Scheduler](../roles/scheduler.md)
