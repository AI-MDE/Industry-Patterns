---
type: entity
title: "Service Qualification"
---

# Service Qualification

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Qualification](README.md).

## Definition and detail

A controlled evaluation of whether and how a requested Service can be delivered.

Logical attributes: Qualification Identifier; Qualification Type; Status; Requested At; Completed At; Offering; Location; Requested Characteristics; Result; Valid Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-qualification) | Service Qualification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](../../request/request/service-request.md) | receives | Service Qualification | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
