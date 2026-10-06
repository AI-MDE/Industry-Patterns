---
type: entity
title: "Insured Object"
---

# Insured Object

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

## Definition and detail

A Policy-level representation of a Party, property, vehicle, person, activity, or other subject protected or scheduled by the Policy.

Logical attributes: Insured Object Identifier; Object Type; Description; External Identifier; Valuation; Location; Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#insured-object) | Insured Object |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy](policy.md) | covers | [Insured Object](insured-object.md) | M:M through Coverage | [insurance](../../../../patterns/insurance.md) |
