---
type: entity
title: "Location"
---

# Location

Domain: [Health Care](../README.md). ABE: [Health Care Organization](README.md).

Specializes: [Geographic Location](../../party/contact-mechanism/geographic-location.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A place within or associated with a Facility, such as campus, building, ward, room, bed, clinic, mobile unit, or virtual endpoint.

Logical attributes: Location Identifier; Location Name; Location Type; Location Status; Parent Location reference; Capacity; Operational Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#location) | Location |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Facility](facility.md) | contains | [Location](location.md) | 1:M recursive | [health-care](../../../../patterns/health-care.md) |
