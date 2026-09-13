---
type: use-case
title: "Order Service"
description: "Create an authorized request for a service needed by the Patient."
tags: [health-care, industry-pattern, use-case]
---

# Order Service

## Goal

Create an authorized request for a service needed by the Patient.

## Actors

Provider.

## Trigger

Assessment or Care Plan identifies a required service.

## Preconditions

Provider scope is active and Patient/context are known.

## Input

Service, intent, priority, reason, timing, performer, instructions.

## Context

Care Delivery.

## Flow

1. Select service.
2. Capture reason and intent.
3. Validate scope, duplication, consent, and prerequisites.
4. Determine Authorization need.
5. Submit request.
6. Notify responsible performer.

## Alternatives / Conditions

Authorization required; duplicate warning; Patient refusal; unavailable service.

## Outcome

Valid Service Request is active or rejected with reason.

## Output

Service Request and next action.

## Postconditions

Request is linked to Encounter, Episode, Case, or Care Plan.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

ServiceRequest.draft; ServiceRequest.submit

## Related Pages

Service Order — design references only; page specifications are outside this reusable requirements knowledge base.
