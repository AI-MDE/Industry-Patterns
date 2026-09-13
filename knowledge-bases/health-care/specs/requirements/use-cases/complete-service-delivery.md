---
type: use-case
title: "Complete Service Delivery"
description: "Record that an authorized service was delivered and capture its result."
tags: [health-care, industry-pattern, use-case]
---

# Complete Service Delivery

## Goal

Record that an authorized service was delivered and capture its result.

## Actors

Provider.

## Trigger

Performance of a requested or planned service concludes.

## Preconditions

Patient, service, performer, and governing request/plan or exception basis are known.

## Input

Delivery time, quantity, Location, result, evidence.

## Context

Care Delivery.

## Flow

1. Confirm governing authority.
2. Record performance details.
3. Capture result and evidence.
4. Validate Provider scope and traceability.
5. Complete delivery.
6. Emit downstream clinical and billing events.

## Alternatives / Conditions

Partial completion, cancellation, complication, entered-in-error.

## Outcome

Service Delivery is completed with traceable evidence.

## Output

Delivery result and downstream events.

## Postconditions

Eligible charge generation may proceed.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

ServiceDelivery.start; ServiceDelivery.record-result; ServiceDelivery.complete

## Related Pages

Service Delivery — design references only; page specifications are outside this reusable requirements knowledge base.
