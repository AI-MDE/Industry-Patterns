---
type: primary-entity
title: "Lift Request"
---

# Lift Request

Domain: [Crane Rental](../README.md). ABE: [Lift Request](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Customer request for equipment rental, lifting service, planning, or consultation.

Logical attributes: Request Identifier; Request Number; Request Status; Requested Date; Customer; Project; Job Site; Requested Start; Requested End; Service Model; Priority; Description.

Service models may include bare rental, operated rental, managed lift, taxi crane, long-term rental, tower-crane service, or consultation.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#lift-request) | Lift Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](lift-request.md) | concerns | [Job Site](../customer-account/job-site.md) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Request](lift-request.md) | contains | [Load Requirement](load-requirement.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Request](lift-request.md) | receives | [Site Survey](site-survey.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Request](lift-request.md) | produces | [Quote](../rental-offering/quote.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
