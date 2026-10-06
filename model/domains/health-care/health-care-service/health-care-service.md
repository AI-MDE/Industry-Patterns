---
type: primary-entity
title: "Health Care Service"
---

# Health Care Service

Domain: [Health Care](../README.md). ABE: [Health Care Service](README.md).

Specializes: [Service](../../product-and-service/product/service.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A defined clinical, diagnostic, administrative, or supportive service.

Logical attributes: Service Identifier; Service Code; Service Name; Service Type; Service Status; Standard Duration; Delivering Specialty.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#health-care-service) | Health Care Service |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](../service-request/service-request.md) | requests | [Health Care Service](health-care-service.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
