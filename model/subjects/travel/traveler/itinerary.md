---
type: entity
title: "Itinerary"
---

# Itinerary

Subject: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

An organized travel plan containing ordered Segments and services for one or more Travelers.

Logical attributes: Itinerary Identifier; Itinerary Name; Itinerary Status; Start Date; End Date; Primary Destination; Created At; Owner.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#itinerary) | Itinerary |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Itinerary | contains | [Segment](segment.md) | 1:M ordered | [travel](../../../../industry-patterns/travel.md) |
| Itinerary | includes | [Traveler](traveler.md) | M:M | [travel](../../../../industry-patterns/travel.md) |
