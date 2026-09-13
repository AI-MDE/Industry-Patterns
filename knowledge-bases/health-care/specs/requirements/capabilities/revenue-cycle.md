---
type: capability
title: "Revenue Cycle"
description: "Translate authorized and documented service delivery into accurate Claims, adjudication, and payment."
tags: [health-care, industry-pattern, capability]
---

# Revenue Cycle

## Purpose

Translate authorized and documented service delivery into accurate Claims, adjudication, and payment.

## Scope

Coverage verification, authorization, charge evidence, Claim assembly, submission, correction, adjudication, and reconciliation.

## Actors / Roles

- [billing-specialist](../roles/billing-specialist.md)
- [payer-reviewer](../roles/payer-reviewer.md)
- [provider](../roles/provider.md)

## Entities

- [coverage](../entities/coverage.md)
- [authorization](../entities/authorization.md)
- [service-delivery](../entities/service-delivery.md)
- [claim](../entities/claim.md)
- [claim-line](../entities/claim-line.md)

## Use Cases

- [request-service-authorization](../use-cases/request-service-authorization.md)
- [submit-claim](../use-cases/submit-claim.md)
- [record-claim-adjudication](../use-cases/record-claim-adjudication.md)

## Rules

- [coverage-must-be-effective-on-service-date](../rules/coverage-must-be-effective-on-service-date.md)
- [authorization-does-not-replace-consent](../rules/authorization-does-not-replace-consent.md)
- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
- [claim-totals-must-reconcile](../rules/claim-totals-must-reconcile.md)

## Relationships to other capabilities

Consumes evidence from Patient Administration and Care Delivery.
