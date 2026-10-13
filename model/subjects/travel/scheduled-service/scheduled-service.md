---
type: entity
title: "Scheduled Service"
---

# Scheduled Service

Subject: [Travel](../README.md). ABE: [Scheduled Service](README.md).

Also known as: Service Instance (Travel).

## Definition and detail

A dated or otherwise bounded occurrence of a Travel Service.

Logical attributes: Service Instance Identifier; Service Date; Scheduled Start; Scheduled End; Actual Start; Actual End; Instance Status; Origin; Destination; Equipment or Property Reference.

Examples: a specific flight, train, hotel-night stay, vehicle rental period, cruise sailing, tour departure, or event performance.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#service-instance) | Service Instance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Service](../../product/product/service.md) | occurs as | Service Instance | 1:M | [travel](../../../../industry-patterns/travel.md) |
| [Schedule](../../scheduling/appointment/schedule.md) | generates or governs | Service Instance | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Service Instance | uses | [Location](../../location/geographic-location/geographic-location.md) | M:M | [travel](../../../../industry-patterns/travel.md) |
| [Segment](../traveler/segment.md) | references | Service Instance | M:0..1 | [travel](../../../../industry-patterns/travel.md) |
| [Disruption](../disruption/disruption.md) | affects | Service Instance | M:M | [travel](../../../../industry-patterns/travel.md) |
