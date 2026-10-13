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
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#facility) | Facility |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Health Care Organization](health-care-organization.md) | operates | [Facility](facility.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Facility](facility.md) | contains | [Location](location.md) | 1:M recursive | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Contains Locations; hosts Appointments, Encounters, and Service Deliveries.

## Operations

- register
- activate
- suspend
- add-location

## States

planned; active; suspended; closed

## Rules

- [service-location-must-be-operational](../rules/service-location-must-be-operational.md)
