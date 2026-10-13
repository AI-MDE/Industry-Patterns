---
type: entity
title: "Traveler"
---

# Traveler

Subject: [Travel](../README.md). ABE: [Traveler](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Person participating in an Itinerary or consuming a Travel Service.

Logical attributes: Traveler Identifier; Traveler Type; Name; Date of Birth where required; Preferred Language; Loyalty References; Accessibility Needs.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#traveler) | Traveler |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Itinerary](itinerary.md) | includes | Traveler | M:M | [travel](../../../../industry-patterns/travel.md) |
