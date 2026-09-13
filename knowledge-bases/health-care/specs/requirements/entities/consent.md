---
type: entity
title: "Consent"
description: "A Patient or representative decision concerning care, disclosure, research, or another specified activity."
tags: [health-care, industry-pattern, entity]
---

# Consent

## Purpose

A Patient or representative decision concerning care, disclosure, research, or another specified activity.

## Attributes

Consent Identifier; Type; Status; Decision; Given By; Recorded By; Scope; Effective From; Effective Through; Revocation Date

## Relationships

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

- [consent-evaluated-by-purpose-scope-and-time](../rules/consent-evaluated-by-purpose-scope-and-time.md)
- [authorization-does-not-replace-consent](../rules/authorization-does-not-replace-consent.md)
