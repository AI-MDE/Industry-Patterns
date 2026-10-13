---
type: entity
title: "Network Resource"
---

# Network Resource

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Instance](README.md).

Specializes: [Resource](../../resource/resource/resource.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An individually managed physical, logical, or virtual network element or capacity.

Logical attributes: Resource Identifier; Resource Type; Resource Status; Specification; Owner; Operator; Location; Capacity; Installed Date; Retired Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#network-resource) | Network Resource |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Instance](service-instance.md) | uses | Network Resource | M:M through assignment | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Alarm](../outage/alarm.md) | concerns | Network Resource | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
