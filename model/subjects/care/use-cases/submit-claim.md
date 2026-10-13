---
type: use-case
title: "Submit Claim"
description: "Submit an accurate, supported Claim for delivered services."
tags: [health-care, canonical-model, use-case]
---

# Submit Claim

## Goal

Submit an accurate, supported Claim for delivered services.

## Actors

Billing Specialist.

## Trigger

Eligible Service Deliveries and Charges are ready for billing.

## Preconditions

Patient, Payer, Coverage, Provider, coding, and service evidence are available.

## Input

Claim header, Claim Lines, Coverage, Authorization, service and diagnosis references.

## Context

Revenue Cycle.

## Flow

1. Select billable deliveries.
2. Assemble Claim Lines.
3. Validate traceability, coding, authorization, dates, and totals.
4. Resolve blocking errors.
5. Submit Claim.
6. Record acknowledgment.

## Alternatives / Conditions

Hold, correction, rejected submission, coordination of benefits.

## Outcome

Claim is submitted and traceable to delivered care.

## Output

Claim number, submission status, validation evidence.

## Postconditions

Submitted commercial snapshot is retained.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[Claim.assemble](../../coverage/coverage/claim.md#operations); [Claim.validate](../../coverage/coverage/claim.md#operations); [Claim.submit](../../coverage/coverage/claim.md#operations)


## Role definitions

- [Billing Specialist](../roles/billing-specialist.md)
- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
