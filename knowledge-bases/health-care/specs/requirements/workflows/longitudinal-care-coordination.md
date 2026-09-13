---
type: workflow
title: "Longitudinal Care Coordination"
description: "Coordinate ongoing Patient goals and activities across encounters, services, and participants."
tags: [health-care, industry-pattern, workflow]
---

# Longitudinal Care Coordination

## Purpose

Coordinate ongoing Patient goals and activities across encounters, services, and participants.

## Trigger

A Patient need requires care extending beyond one Encounter.

## Participants / Roles

Patient; Related Person; Care Coordinator; Providers.

## Steps

1. Open Episode or Medical Case.
2. [Create Care Plan](../use-cases/create-care-plan.md).
3. Order and deliver planned services.
4. Record observations and outcomes.
5. [Coordinate Medical Case](../use-cases/coordinate-medical-case.md).
6. Review goals and finish, revise, or continue.

## Resulting States / Transitions

Episode active/finished; Case resolved/closed; Care Plan active/completed.

## Exceptions / Alternate Paths

Patient declines; transfer; lost follow-up; goal change; case reopening.

## Related Use Cases

Linked in the steps above.

## Related Rules

- [care-plan-must-identify-accountable-provider](../rules/care-plan-must-identify-accountable-provider.md)
- [case-resolution-requires-evidence](../rules/case-resolution-requires-evidence.md)
- [consent-evaluated-by-purpose-scope-and-time](../rules/consent-evaluated-by-purpose-scope-and-time.md)
