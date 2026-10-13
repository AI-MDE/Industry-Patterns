---
type: entity
title: "Provider"
---

# Provider

Domain: [Health Care](../README.md). ABE: [Health Care Organization](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Party authorized or assigned to deliver, order, supervise, interpret, or coordinate care.

Logical attributes: Provider Identifier; Provider Type; Provider Status; Primary Specialty; License reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#provider) | Provider |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Provider](provider.md) | performs | [Practitioner Role](practitioner-role.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Provider](provider.md) | participates in | [Encounter](../encounter/encounter.md) | M:M | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Performs Practitioner Roles; participates in Encounters; authors Requests, Observations, Diagnoses, Procedures, and Notes.

## Operations

- register
- verify-credential
- assign-role
- suspend-role

## States

proposed; active; suspended; inactive

## Rules

- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)
