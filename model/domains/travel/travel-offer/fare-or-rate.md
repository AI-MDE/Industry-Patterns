---
type: entity
title: "Fare or Rate"
---

# Fare or Rate

Domain: [Travel](../README.md). ABE: [Travel Offer](README.md).

## Definition and detail

A governed price basis and commercial condition for a Travel Service.

Logical attributes: Fare or Rate Identifier; Code; Type; Amount; Currency; Cabin or Room Class; Occupancy; Effective From; Effective Through; Rule Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#fare-or-rate) | Fare or Rate |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Fare or Rate](fare-or-rate.md) | prices | [Offer Item](offer-item.md) | 1:M | [travel](../../../../patterns/travel.md) |
