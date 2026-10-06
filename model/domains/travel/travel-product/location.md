---
type: entity
title: "Location"
---

# Location

Domain: [Travel](../README.md). ABE: [Travel Product](README.md).

Specializes: [Geographic Location](../../party/contact-mechanism/geographic-location.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An airport, station, city, hotel, terminal, port, address, pickup point, region, or virtual meeting location.

Logical attributes: Location Identifier; Location Code; Location Name; Location Type; Time Zone; Parent Location; Geographic Coordinates; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#location) | Location |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Instance](service-instance.md) | uses | [Location](location.md) | M:M | [travel](../../../../patterns/travel.md) |
