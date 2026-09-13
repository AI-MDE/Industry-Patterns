---
type: use-case
title: "Verify Coverage"
description: "Determine whether recorded Coverage is applicable to anticipated or delivered care."
tags: [health-care, industry-pattern, use-case]
---

# Verify Coverage

## Goal

Determine whether recorded Coverage is applicable to anticipated or delivered care.

## Actors

Scheduler or Billing Specialist.

## Trigger

Coverage is needed for scheduling, Authorization, or Claim preparation.

## Preconditions

Patient identity and prospective service date are known.

## Input

Patient, payer/member details, service date, service context.

## Context

Patient Administration / Revenue Cycle.

## Flow

1. Select Coverage.
2. Validate identity and effective period.
3. Request verification when required.
4. Record response and limitations.
5. Communicate financial uncertainty.

## Alternatives / Conditions

Unverified or retroactive coverage remains pending.

## Outcome

Coverage is verified, rejected, or pending with evidence.

## Output

Coverage status and limitations.

## Postconditions

Verification source and time are retained.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

Coverage.verify; Coverage.record

## Related Pages

Coverage — design references only; page specifications are outside this reusable requirements knowledge base.
