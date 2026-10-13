---
type: entity
title: "Segment"
---

# Segment

Subject: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

One ordered movement, stay, rental, activity, or other component of an Itinerary.

Logical attributes: Segment Identifier; Segment Type; Sequence; Planned Start; Planned End; Origin or Location; Destination; Segment Status; Service Instance.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#segment) | Segment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Itinerary](itinerary.md) | contains | Segment | 1:M ordered | [travel](../../../../industry-patterns/travel.md) |
| Segment | references | [Service Instance](../scheduled-service/scheduled-service.md) | M:0..1 | [travel](../../../../industry-patterns/travel.md) |
| Segment | connects through | [Connection](connection.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
