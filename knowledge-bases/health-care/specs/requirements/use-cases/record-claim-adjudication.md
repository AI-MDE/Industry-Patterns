---
type: use-case
title: "Record Claim Adjudication"
description: "Record and reconcile the Payer decision for a submitted Claim."
tags: [health-care, industry-pattern, use-case]
---

# Record Claim Adjudication

## Goal

Record and reconcile the Payer decision for a submitted Claim.

## Actors

Billing Specialist; Payer response is an external trigger.

## Trigger

Adjudication or remittance is received.

## Preconditions

Submitted Claim is identifiable.

## Input

Line decisions, allowed amount, paid amount, adjustments, denial reasons, patient responsibility.

## Context

Revenue Cycle.

## Flow

1. Match response to Claim.
2. Record line and Claim decisions.
3. Reconcile amounts.
4. Route denials or discrepancies.
5. Record payment or receivable.
6. Close or appeal.

## Alternatives / Conditions

Partial payment; unmatched response; denial; appeal.

## Outcome

Claim financial responsibility is explained and reconciled.

## Output

Adjudication, payment, exceptions, and next actions.

## Postconditions

Claim status and balances are updated with evidence.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

Claim.record-adjudication; Claim.appeal; Claim.close

## Related Pages

Claim Adjudication — design references only; page specifications are outside this reusable requirements knowledge base.
