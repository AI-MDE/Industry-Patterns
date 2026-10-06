---
type: entity
title: "Person"
---

# Person

Domain: [Party](../README.md). ABE: [Party](README.md).

## Definition and detail

A human Party.

Logical attributes: Given Name; Middle Name; Family Name; Preferred Name; Birth Date where legitimately required.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#person) | Person |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Person](person.md) | performs role of | [Patient](../../health-care/patient/patient.md) | 1:M over time | [health-care](../../../../patterns/health-care.md) |
