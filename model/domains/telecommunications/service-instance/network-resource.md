---
type: entity
title: "Network Resource"
---

# Network Resource

Domain: [Telecommunications](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

An individually managed physical, logical, or virtual network element or capacity.

Logical attributes: Resource Identifier; Resource Type; Resource Status; Specification; Owner; Operator; Location; Capacity; Installed Date; Retired Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#network-resource) | Network Resource |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Instance](service-instance.md) | uses | [Network Resource](network-resource.md) | M:M through assignment | [telecommunications](../../../../patterns/telecommunications.md) |
| [Alarm](../trouble-ticket/alarm.md) | concerns | [Network Resource](network-resource.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
