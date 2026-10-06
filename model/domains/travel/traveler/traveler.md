---
type: primary-entity
title: "Traveler"
---

# Traveler

Domain: [Travel](../README.md). ABE: [Traveler](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Person participating in an Itinerary or consuming a Travel Service.

Logical attributes: Traveler Identifier; Traveler Type; Name; Date of Birth where required; Preferred Language; Loyalty References; Accessibility Needs.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#traveler) | Traveler |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Itinerary](itinerary.md) | includes | [Traveler](traveler.md) | M:M | [travel](../../../../patterns/travel.md) |
