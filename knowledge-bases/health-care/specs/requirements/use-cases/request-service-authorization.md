---
type: use-case
title: "Request Service Authorization"
description: "Obtain a Payer or organizational decision for proposed services."
tags: [health-care, industry-pattern, use-case]
---

# Request Service Authorization

## Goal

Obtain a Payer or organizational decision for proposed services.

## Actors

Billing Specialist or Care Coordinator; Payer Reviewer decides.

## Trigger

A Service Request requires prior Authorization.

## Preconditions

Patient, Coverage, requested service, reason, and supporting evidence exist.

## Input

Coverage, service, quantity, dates, diagnosis/evidence, Provider.

## Context

Revenue Cycle.

## Flow

1. Assemble request.
2. Validate coverage and required evidence.
3. Submit to decision authority.
4. Record questions or additional evidence.
5. Record decision and conditions.
6. Notify care team.

## Alternatives / Conditions

Partial approval; denial; appeal; request expires.

## Outcome

Authorization decision is available with conditions.

## Output

Authorization number, status, scope, and period.

## Postconditions

Clinical consent remains independently required.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

Authorization.request; Authorization.review; Authorization.approve; Authorization.deny

## Related Pages

Authorization — design references only; page specifications are outside this reusable requirements knowledge base.
