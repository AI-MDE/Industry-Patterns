---
type: workflow
title: "Ordered Service Delivery"
description: "Coordinate a clinical need from order through authorization and completed delivery."
tags: [health-care, industry-pattern, workflow]
---

# Ordered Service Delivery

## Purpose

Coordinate a clinical need from order through authorization and completed delivery.

## Trigger

A Provider determines that a Patient needs a service.

## Participants / Roles

Provider; Patient; Care Coordinator; Billing Specialist; Payer Reviewer.

## Steps

1. [Order Service](../use-cases/order-service.md).
2. [Capture Consent](../use-cases/capture-consent.md) when required.
3. [Request Service Authorization](../use-cases/request-service-authorization.md) when required.
4. Schedule or coordinate performance.
5. [Complete Service Delivery](../use-cases/complete-service-delivery.md).

## Resulting States / Transitions

Service Request completed; Authorization decided; Service Delivery completed.

## Exceptions / Alternate Paths

Patient refusal; denied Authorization; partial delivery; cancellation; emergency basis.

## Related Use Cases

Linked in the steps above.

## Related Rules

- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)
- [authorization-does-not-replace-consent](../rules/authorization-does-not-replace-consent.md)
- [service-delivery-must-trace-to-request-or-plan](../rules/service-delivery-must-trace-to-request-or-plan.md)
