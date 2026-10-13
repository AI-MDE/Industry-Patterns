---
type: entity
title: "Facility"
---

# Facility

Subject: [Locations and Sites](../README.md). ABE: [Facility](README.md).

Also known as: Manufacturing Facility (Manufacturing).

## Definition and detail

A physical or virtual environment operated for care delivery.

Logical attributes: Facility Identifier; Facility Name; Facility Type; Facility Status; Operator Organization reference; Contact reference.

### In industries

- **Manufacturing Facility** (Manufacturing): A plant, factory, workshop, laboratory, or contract-manufacturing location. Attributes: Facility Identifier; Facility Name; Facility Type; Status; Time Zone; Address; Operating Calendar.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#facility) | Facility |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#manufacturing-facility) | Manufacturing Facility |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Health Care Organization](../../care/health-care-organization/health-care-organization.md) | operates | Facility | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Facility | contains | [Location](../geographic-location/geographic-location.md) | 1:M recursive | [health-care](../../../../industry-patterns/health-care.md) |

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

- [service-location-must-be-operational](../../care/rules/service-location-must-be-operational.md)
