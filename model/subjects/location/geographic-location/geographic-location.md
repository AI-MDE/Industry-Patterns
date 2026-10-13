---
type: entity
title: "Geographic Location"
---

# Geographic Location

Subject: [Locations and Sites](../README.md). ABE: [Geographic Location](README.md).

Also known as: Location (Health Care), Location (Travel).

## Definition and detail

A physical, administrative, service, or market location.

Logical attributes: Location Identifier; Location Type; Location Name; Geographic Coordinates; Parent Location reference.

### In industries

- **Location** (Health Care): A place within or associated with a Facility, such as campus, building, ward, room, bed, clinic, mobile unit, or virtual endpoint. Attributes: Location Identifier; Location Name; Location Type; Location Status; Parent Location reference; Capacity; Operational Status.
- **Location** (Travel): An airport, station, city, hotel, terminal, port, address, pickup point, region, or virtual meeting location. Attributes: Location Identifier; Location Code; Location Name; Location Type; Time Zone; Parent Location; Geographic Coordinates; Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#geographic-location) | Geographic Location |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#location) | Location |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#location) | Location |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Facility](../facility/facility.md) | contains | Location | 1:M recursive | [health-care](../../../../industry-patterns/health-care.md) |
| [Service Instance](../../travel/scheduled-service/scheduled-service.md) | uses | Location | M:M | [travel](../../../../industry-patterns/travel.md) |
