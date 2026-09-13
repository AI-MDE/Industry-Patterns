---
type: capability
title: "Care Coordination"
description: "Coordinate multi-step and multi-participant care over Episodes, Cases, and Care Plans."
tags: [health-care, industry-pattern, capability]
---

# Care Coordination

## Purpose

Coordinate multi-step and multi-participant care over Episodes, Cases, and Care Plans.

## Scope

Episodes, managed cases, care teams, goals, planned activities, follow-up, and transitions.

## Actors / Roles

- [patient](../roles/patient.md)
- [care-coordinator](../roles/care-coordinator.md)
- [provider](../roles/provider.md)
- [related-person](../roles/related-person.md)

## Entities

- [episode-of-care](../entities/episode-of-care.md)
- [medical-case](../entities/medical-case.md)
- [care-plan](../entities/care-plan.md)
- [service-request](../entities/service-request.md)
- [service-delivery](../entities/service-delivery.md)

## Use Cases

- [create-care-plan](../use-cases/create-care-plan.md)
- [coordinate-medical-case](../use-cases/coordinate-medical-case.md)

## Rules

- [care-plan-must-identify-accountable-provider](../rules/care-plan-must-identify-accountable-provider.md)
- [case-resolution-requires-evidence](../rules/case-resolution-requires-evidence.md)

## Relationships to other capabilities

Coordinates Care Delivery and may depend on Authorization.
