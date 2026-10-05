---
type: entity
title: "Eligibility Verification"
---

# Eligibility Verification

Domain: [Physical Therapy](../README.md). ABE: [Patient Intake](README.md).

## Definition and detail

Evidence that coverage or another funding arrangement was checked for planned services.

Logical attributes: Verification Identifier; Coverage; Verification Status; Verified Date; Service Type; Effective From; Effective Through; Benefit Detail; Source; Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#eligibility-verification) | Eligibility Verification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Eligibility Verification](eligibility-verification.md) | evaluates | [Coverage](../../health-care/coverage/coverage.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
