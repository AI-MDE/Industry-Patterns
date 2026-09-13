---
type: workflow
title: "Claim To Payment"
description: "Convert delivered services into an adjudicated and reconciled financial outcome."
tags: [health-care, industry-pattern, workflow]
---

# Claim To Payment

## Purpose

Convert delivered services into an adjudicated and reconciled financial outcome.

## Trigger

Billable Service Delivery is completed.

## Participants / Roles

Billing Specialist; Payer Reviewer; Provider for corrections.

## Steps

1. Verify Coverage and Authorization.
2. [Submit Claim](../use-cases/submit-claim.md).
3. Receive acknowledgment and status.
4. [Record Claim Adjudication](../use-cases/record-claim-adjudication.md).
5. Correct, appeal, collect, or close as required.

## Resulting States / Transitions

Claim submitted, adjudicated, paid/denied/appealed, and closed.

## Exceptions / Alternate Paths

Rejected Claim; partial payment; denial; unmatched remittance; corrected Claim.

## Related Use Cases

Linked in the steps above.

## Related Rules

- [coverage-must-be-effective-on-service-date](../rules/coverage-must-be-effective-on-service-date.md)
- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
- [claim-totals-must-reconcile](../rules/claim-totals-must-reconcile.md)
