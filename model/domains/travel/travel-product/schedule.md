---
type: entity
title: "Schedule"
---

# Schedule

Domain: [Travel](../README.md). ABE: [Travel Product](README.md).

## Definition and detail

A governed pattern of planned Service Instances.

Logical attributes: Schedule Identifier; Schedule Type; Operating Days; Start Time; End Time; Time Zone; Effective From; Effective Through; Schedule Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#schedule) | Schedule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Schedule](schedule.md) | generates or governs | [Service Instance](service-instance.md) | 1:M | [travel](../../../../patterns/travel.md) |
