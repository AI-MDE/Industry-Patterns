---
type: use-case
title: "Review Access Audit"
description: "Investigate whether protected-information access complied with authority and purpose."
tags: [health-care, industry-pattern, use-case]
---

# Review Access Audit

## Goal

Investigate whether protected-information access complied with authority and purpose.

## Actors

Privacy Officer.

## Trigger

Scheduled review, complaint, alert, or suspected inappropriate access.

## Preconditions

Reviewer has heightened authorization.

## Input

Patient, actor, period, action, purpose, correlation, policy.

## Context

Privacy, Consent, and Audit.

## Flow

1. Define authorized review scope.
2. Retrieve immutable Audit Events.
3. Correlate access with role, care relationship, consent, and purpose.
4. Identify exceptions.
5. Record findings and actions.

## Alternatives / Conditions

Insufficient evidence; legal hold; security escalation.

## Outcome

Access is verified or an investigation is initiated.

## Output

Audit findings and evidence references.

## Postconditions

Review itself is audited.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

AuditEvent.query-authorized-audit

## Related Pages

Audit Review — design references only; page specifications are outside this reusable requirements knowledge base.
