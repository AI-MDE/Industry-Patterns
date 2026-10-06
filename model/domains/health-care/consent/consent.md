---
type: primary-entity
title: "Consent"
---

# Consent

Domain: [Health Care](../README.md). ABE: [Consent](README.md).

## Definition and detail

A Patient's or authorized representative's permission, refusal, or directive concerning care, disclosure, research, or another specified activity.

Logical attributes: Consent Identifier; Consent Type; Consent Status; Decision; Given By; Recorded By; Effective From; Effective Through; Scope; Revocation Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#consent) | Consent |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Consent](consent.md) | given by | Patient or Related Person (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
