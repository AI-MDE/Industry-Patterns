---
type: entity
title: "Risk Item"
---

# Risk Item

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

A Party, property, vehicle, activity, liability, person, contract, location, or other subject being evaluated for insurance.

Logical attributes: Risk Item Identifier; Risk Type; Description; Location; Valuation; Classification; Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#risk-item) | Risk Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Insurance Application](insurance-application.md) | describes | [Risk Item](risk-item.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
