---
type: capability
title: "Privacy Consent And Audit"
description: "Govern access, consent, disclosure, provenance, and audit of protected health information."
tags: [health-care, industry-pattern, capability]
---

# Privacy Consent And Audit

## Purpose

Govern access, consent, disclosure, provenance, and audit of protected health information.

## Scope

Consent decisions, access evaluation, restrictions, audit capture, and authorized audit review.

## Actors / Roles

- [patient](../roles/patient.md)
- [related-person](../roles/related-person.md)
- [provider](../roles/provider.md)
- [privacy-officer](../roles/privacy-officer.md)

## Entities

- [consent](../entities/consent.md)
- [audit-event](../entities/audit-event.md)
- [patient](../entities/patient.md)

## Use Cases

- [capture-consent](../use-cases/capture-consent.md)
- [review-access-audit](../use-cases/review-access-audit.md)

## Rules

- [consent-evaluated-by-purpose-scope-and-time](../rules/consent-evaluated-by-purpose-scope-and-time.md)
- [minimum-necessary-access](../rules/minimum-necessary-access.md)
- [protected-access-must-be-audited](../rules/protected-access-must-be-audited.md)
- [audit-events-are-immutable](../rules/audit-events-are-immutable.md)

## Relationships to other capabilities

Constrains every other capability.
