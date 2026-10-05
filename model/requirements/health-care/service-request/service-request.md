---
type: primary-entity
title: "Service Request"
---

# Service Request

Domain: [Health Care](../README.md). ABE: [Service Request](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A request or order for evaluation, procedure, diagnostic test, therapy, referral, consultation, device, or other service.

Logical attributes: Service Request Identifier; Request Type; Service Code; Request Status; Intent; Priority; Authored Date; Requester; Requested Performer; Occurrence Window; Reason.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#service-request) | Service Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](service-request.md) | requests | [Health Care Service](../health-care-service/health-care-service.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Service Request](service-request.md) | may produce | Service Delivery or Procedure (review) | 1:M | [health-care](../../../../patterns/health-care.md) |
