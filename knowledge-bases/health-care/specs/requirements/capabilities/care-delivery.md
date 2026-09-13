---
type: capability
title: "Care Delivery"
description: "Assess the Patient, order and deliver services, record clinical evidence, and reach meaningful outcomes."
tags: [health-care, industry-pattern, capability]
---

# Care Delivery

## Purpose

Assess the Patient, order and deliver services, record clinical evidence, and reach meaningful outcomes.

## Scope

Encounters, conditions, observations, service requests, service delivery, and clinical documentation.

## Actors / Roles

- [patient](../roles/patient.md)
- [provider](../roles/provider.md)
- [related-person](../roles/related-person.md)

## Entities

- [encounter](../entities/encounter.md)
- [condition](../entities/condition.md)
- [observation](../entities/observation.md)
- [service-request](../entities/service-request.md)
- [service-delivery](../entities/service-delivery.md)

## Use Cases

- [conduct-encounter](../use-cases/conduct-encounter.md)
- [record-observation](../use-cases/record-observation.md)
- [order-service](../use-cases/order-service.md)
- [complete-service-delivery](../use-cases/complete-service-delivery.md)

## Rules

- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)
- [finalized-records-preserve-history](../rules/finalized-records-preserve-history.md)
- [service-delivery-must-trace-to-request-or-plan](../rules/service-delivery-must-trace-to-request-or-plan.md)

## Relationships to other capabilities

Uses Access and Scheduling; contributes to Care Coordination and Revenue Cycle.
