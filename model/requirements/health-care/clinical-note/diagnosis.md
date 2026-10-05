---
type: entity
title: "Diagnosis"
---

# Diagnosis

Domain: [Health Care](../README.md). ABE: [Clinical Note](README.md).

## Definition and detail

A Provider's diagnostic assertion made in a particular Encounter, Episode, or Case.

Logical attributes: Diagnosis Identifier; Diagnosis Code; Diagnosis Type; Diagnosis Status; Rank; Diagnosed Date; Diagnosing Provider; Evidence reference.

Rule: keep longitudinal Condition separate from an Encounter-specific Diagnosis when both meanings are required.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#diagnosis) | Diagnosis |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Diagnosis](diagnosis.md) | may assert | [Condition](condition.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
