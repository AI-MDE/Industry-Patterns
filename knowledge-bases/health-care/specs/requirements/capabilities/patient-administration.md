---
type: capability
title: "Patient Administration"
description: "Establish and maintain trustworthy Patient identity, demographics, contacts, related persons, and coverage."
tags: [health-care, industry-pattern, capability]
---

# Patient Administration

## Purpose

Establish and maintain trustworthy Patient identity, demographics, contacts, related persons, and coverage.

## Scope

Registration, identity reconciliation, demographic maintenance, related-person authority, and coverage verification.

## Actors / Roles

- [patient](../roles/patient.md)
- [related-person](../roles/related-person.md)
- [scheduler](../roles/scheduler.md)
- [privacy-officer](../roles/privacy-officer.md)

## Entities

- [patient](../entities/patient.md)
- [coverage](../entities/coverage.md)
- [consent](../entities/consent.md)
- [audit-event](../entities/audit-event.md)

## Use Cases

- [register-patient](../use-cases/register-patient.md)
- [verify-coverage](../use-cases/verify-coverage.md)

## Rules

- [patient-identity-must-be-traceable](../rules/patient-identity-must-be-traceable.md)
- [minimum-necessary-access](../rules/minimum-necessary-access.md)
- [protected-access-must-be-audited](../rules/protected-access-must-be-audited.md)

## Relationships to other capabilities

Enables Access and Scheduling, Care Delivery, Privacy and Consent, and Revenue Cycle.
