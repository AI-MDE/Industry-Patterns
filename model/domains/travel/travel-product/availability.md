---
type: entity
title: "Availability"
---

# Availability

Domain: [Travel](../README.md). ABE: [Travel Product](README.md).

## Definition and detail

A statement or calculation of capacity available for a Product, Service Instance, room type, vehicle class, or allotment.

Logical attributes: Availability Identifier; Inventory Type; Available Quantity; Held Quantity; Sold Quantity; Availability Status; Checked At; Source.

Rule: availability is time-sensitive sourced information, not a timeless attribute of the Product.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#availability) | Availability |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Availability](availability.md) | describes | Service Instance or inventory class (review) | M:1 | [travel](../../../../patterns/travel.md) |
