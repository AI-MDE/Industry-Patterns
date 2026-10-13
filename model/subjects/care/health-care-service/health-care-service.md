---
type: entity
title: "Health Care Service"
---

# Health Care Service

Subject: [Health Care](../README.md). ABE: [Health Care Service](README.md).

Specializes: [Service](../../product/product/service.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A defined clinical, diagnostic, administrative, or supportive service.

Logical attributes: Service Identifier; Service Code; Service Name; Service Type; Service Status; Standard Duration; Delivering Specialty.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#health-care-service) | Health Care Service |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](../../request/request/service-request.md) | requests | Health Care Service | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
