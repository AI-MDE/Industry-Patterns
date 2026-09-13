---
type: use-case
title: "Schedule Appointment"
description: "Reserve suitable time and resources for a Patient need."
tags: [health-care, industry-pattern, use-case]
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

Appointment.request; Appointment.book

## Related Pages

Appointment Search; Appointment Detail — design references only; page specifications are outside this reusable requirements knowledge base.
