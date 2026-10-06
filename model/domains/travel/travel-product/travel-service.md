---
type: entity
title: "Travel Service"
---

# Travel Service

Domain: [Travel](../README.md). ABE: [Travel Product](README.md).

Specializes: [Service](../../product-and-service/product/service.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A service capability supplied to a Traveler.

Logical attributes: Service Identifier; Service Name; Service Type; Service Status; Supplier; Origin or Location; Destination; Standard Duration; Service Class.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#travel-service) | Travel Service |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Service](travel-service.md) | occurs as | [Service Instance](service-instance.md) | 1:M | [travel](../../../../patterns/travel.md) |
