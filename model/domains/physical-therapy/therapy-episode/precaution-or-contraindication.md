---
type: entity
title: "Precaution or Contraindication"
---

# Precaution or Contraindication

Domain: [Physical Therapy](../README.md). ABE: [Therapy Episode](README.md).

## Definition and detail

A condition or risk affecting evaluation, treatment choice, intensity, supervision, or need for referral.

Logical attributes: Precaution Identifier; Precaution Type; Status; Description; Source; Identified Date; Effective From; Effective Through; Required Action.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#precaution-or-contraindication) | Precaution or Contraindication |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](therapy-episode.md) | has | [Precaution or Contraindication](precaution-or-contraindication.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
