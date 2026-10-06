---
type: entity
title: "Service Qualification"
---

# Service Qualification

Domain: [Telecommunications](../README.md). ABE: [Service Request](README.md).

## Definition and detail

A controlled evaluation of whether and how a requested Service can be delivered.

Logical attributes: Qualification Identifier; Qualification Type; Status; Requested At; Completed At; Offering; Location; Requested Characteristics; Result; Valid Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-qualification) | Service Qualification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](service-request.md) | receives | [Service Qualification](service-qualification.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
