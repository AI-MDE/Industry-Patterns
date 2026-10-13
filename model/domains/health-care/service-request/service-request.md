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
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#service-request) | Service Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Request](service-request.md) | requests | [Health Care Service](../health-care-service/health-care-service.md) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| [Service Request](service-request.md) | may produce | Service Delivery or Procedure (review) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Concerns a Patient; may be part of a Care Plan; may require Consent or Authorization; is fulfilled by Service Delivery.

## Operations

- draft
- submit
- accept
- reject
- revoke
- complete

## States

draft; active; accepted; in-progress; completed; on-hold; revoked; rejected; cancelled

## Rules

- [service-delivery-must-trace-to-request-or-plan](../rules/service-delivery-must-trace-to-request-or-plan.md)
