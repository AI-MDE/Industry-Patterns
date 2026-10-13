---
type: capability
title: "Access And Scheduling"
description: "Connect Patient needs with suitable Provider, service, time, channel, and Location availability."
tags: [health-care, canonical-model, capability]
---

# Access And Scheduling

## Purpose

Connect Patient needs with suitable Provider, service, time, channel, and Location availability.

## Scope

Appointment requests, booking, rescheduling, cancellation, arrival, and referral intake.

## Actors / Roles

- [patient](../roles/patient.md)
- [related-person](../roles/related-person.md)
- [scheduler](../roles/scheduler.md)
- [provider](../roles/provider.md)

## Entities

- [patient](../patient/patient.md)
- [provider](../health-care-organization/provider.md)
- [facility](../../location/facility/facility.md)
- [appointment](../../scheduling/appointment/appointment.md)
- [service-request](../../request/request/service-request.md)

## Use Cases

- [schedule-appointment](../use-cases/schedule-appointment.md)
- [check-in-patient](../use-cases/check-in-patient.md)

## Rules

- [appointment-must-respect-availability](../rules/appointment-must-respect-availability.md)
- [minimum-necessary-access](../rules/minimum-necessary-access.md)

## Relationships to other capabilities

Precedes Care Delivery and may initiate Care Coordination.
