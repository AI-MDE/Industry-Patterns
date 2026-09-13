---
type: use-case
title: "Capture Consent"
description: "Record a valid Patient or representative decision for a defined purpose and scope."
tags: [health-care, industry-pattern, use-case]
---

# Capture Consent

## Goal

Record a valid Patient or representative decision for a defined purpose and scope.

## Actors

Patient or Related Person; authorized staff records.

## Trigger

Care, disclosure, research, or delegated access requires a decision.

## Preconditions

Decision maker identity and authority are established.

## Input

Consent type, decision, purpose, scope, recipients, effective period.

## Context

Privacy, Consent, and Audit.

## Flow

1. Present understandable request.
2. Verify decision-maker authority.
3. Capture decision and scope.
4. Record effective period and restrictions.
5. Activate and audit.

## Alternatives / Conditions

Refusal; partial scope; withdrawal; interpreter or accessibility support.

## Outcome

Consent decision is recorded and evaluable.

## Output

Consent status and scope.

## Postconditions

Dependent operations can independently evaluate it.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

Consent.record-decision; Consent.activate; Consent.revoke

## Related Pages

Consent — design references only; page specifications are outside this reusable requirements knowledge base.
