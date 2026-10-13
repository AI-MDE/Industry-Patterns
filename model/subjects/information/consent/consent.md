---
type: entity
title: "Consent"
---

# Consent

Subject: [Information Governance](../README.md). ABE: [Consent](README.md).

## Definition and detail

A Patient's or authorized representative's permission, refusal, or directive concerning care, disclosure, research, or another specified activity.

Logical attributes: Consent Identifier; Consent Type; Consent Status; Decision; Given By; Recorded By; Effective From; Effective Through; Scope; Revocation Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#consent) | Consent |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Consent | given by | Patient or Related Person (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Concerns a Patient; authorizes or refuses a defined purpose, actor, information scope, or service.

## Operations

- propose
- record-decision
- activate
- revoke
- expire
- correct

## States

proposed; active; inactive; rejected; revoked; entered-in-error

## Rules

- [consent-evaluated-by-purpose-scope-and-time](../../care/rules/consent-evaluated-by-purpose-scope-and-time.md)
- [authorization-does-not-replace-consent](../../care/rules/authorization-does-not-replace-consent.md)
