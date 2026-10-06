---
type: entity
title: "Service Instance"
---

# Service Instance

Domain: [Travel](../README.md). ABE: [Travel Product](README.md).

## Definition and detail

A dated or otherwise bounded occurrence of a Travel Service.

Logical attributes: Service Instance Identifier; Service Date; Scheduled Start; Scheduled End; Actual Start; Actual End; Instance Status; Origin; Destination; Equipment or Property Reference.

Examples: a specific flight, train, hotel-night stay, vehicle rental period, cruise sailing, tour departure, or event performance.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#service-instance) | Service Instance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Service](travel-service.md) | occurs as | [Service Instance](service-instance.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Schedule](schedule.md) | generates or governs | [Service Instance](service-instance.md) | 1:M | [travel](../../../../patterns/travel.md) |
| [Service Instance](service-instance.md) | uses | [Location](location.md) | M:M | [travel](../../../../patterns/travel.md) |
| [Segment](../traveler/segment.md) | references | [Service Instance](service-instance.md) | M:0..1 | [travel](../../../../patterns/travel.md) |
| [Disruption](../change-request/disruption.md) | affects | [Service Instance](service-instance.md) | M:M | [travel](../../../../patterns/travel.md) |
