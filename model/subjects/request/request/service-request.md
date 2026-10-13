---
type: entity
title: "Service Request"
---

# Service Request

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Request](README.md).

Specializes: [Request](request.md). Inherit its meaning; apply the refinements below in this context.

Also known as: Service Request (Equipment Service), Service Request (Financial Services), Service Request (Health Care), Service Request (Telecommunications).

## Definition and detail

An on-demand expression of need for a Service.

Typical examples: equipment breakdown, repair request, urgent treatment request, or ad-hoc room reservation.

### In industries

- **Service Request** (Equipment Service): On-demand expression of need for service on one Equipment item, from a Contact, with priority, location (workshop or on site), requested date, and lifecycle. Binds the **Service Request** and **Demand** roles of the scheduling pattern.
- **Service Request** (Financial Services): A Customer request concerning an Account, Transaction, access, document, limit, or profile. Attributes: Service Request Identifier; Request Type; Request Status; Received Date; Customer; Account; Priority; Assigned Role; Resolution Date.
- **Service Request** (Health Care): A request or order for evaluation, procedure, diagnostic test, therapy, referral, consultation, device, or other service. Attributes: Service Request Identifier; Request Type; Service Code; Request Status; Intent; Priority; Authored Date; Requester; Requested Performer; Occurrence Window; Reason.
- **Service Request** (Telecommunications): An expression of Customer need before an order is accepted. Attributes: Request Identifier; Request Type; Status; Requested Date; Customer; Requested Product; Location; Desired Date; Requirements.

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#service-request) | Service Request |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#service-request) | Service Request |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#service-request) | Service Request |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#service-request) | Service Request |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-request) | Service Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Service Request | requests | [Health Care Service](../../care/health-care-service/health-care-service.md) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| Service Request | may produce | Service Delivery or Procedure (review) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Service Request | receives | [Service Qualification](../../network/service-qualification/service-qualification.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |

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

- [service-delivery-must-trace-to-request-or-plan](../../care/rules/service-delivery-must-trace-to-request-or-plan.md)
