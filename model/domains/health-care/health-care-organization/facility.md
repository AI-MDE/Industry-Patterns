---
type: entity
title: "Facility"
---

# Facility

Domain: [Health Care](../README.md). ABE: [Health Care Organization](README.md).

## Definition and detail

A physical or virtual environment operated for care delivery.

Logical attributes: Facility Identifier; Facility Name; Facility Type; Facility Status; Operator Organization reference; Contact reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#facility) | Facility |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Health Care Organization](health-care-organization.md) | operates | [Facility](facility.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Facility](facility.md) | contains | [Location](location.md) | 1:M recursive | [health-care](../../../../patterns/health-care.md) |
