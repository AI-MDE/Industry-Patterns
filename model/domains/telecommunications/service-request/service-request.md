---
type: primary-entity
title: "Service Request"
---

# Service Request

Domain: [Telecommunications](../README.md). ABE: [Service Request](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An expression of Customer need before an order is accepted.

Logical attributes: Request Identifier; Request Type; Status; Requested Date; Customer; Requested Product; Location; Desired Date; Requirements.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-request) | Service Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](service-request.md) | receives | [Service Qualification](service-qualification.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
