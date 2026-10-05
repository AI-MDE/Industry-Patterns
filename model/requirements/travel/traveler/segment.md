---
type: entity
title: "Segment"
---

# Segment

Domain: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

One ordered movement, stay, rental, activity, or other component of an Itinerary.

Logical attributes: Segment Identifier; Segment Type; Sequence; Planned Start; Planned End; Origin or Location; Destination; Segment Status; Service Instance.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#segment) | Segment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Itinerary](itinerary.md) | contains | [Segment](segment.md) | 1:M ordered | [travel](../../../../patterns/travel.md) |
| [Segment](segment.md) | references | [Service Instance](../travel-product/service-instance.md) | M:0..1 | [travel](../../../../patterns/travel.md) |
| [Segment](segment.md) | connects through | [Connection](connection.md) | 1:M | [travel](../../../../patterns/travel.md) |
