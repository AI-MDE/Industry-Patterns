---
type: entity
title: "Itinerary"
---

# Itinerary

Domain: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

An organized travel plan containing ordered Segments and services for one or more Travelers.

Logical attributes: Itinerary Identifier; Itinerary Name; Itinerary Status; Start Date; End Date; Primary Destination; Created At; Owner.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#itinerary) | Itinerary |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Itinerary](itinerary.md) | contains | [Segment](segment.md) | 1:M ordered | [travel](../../../../patterns/travel.md) |
| [Itinerary](itinerary.md) | includes | [Traveler](traveler.md) | M:M | [travel](../../../../patterns/travel.md) |
