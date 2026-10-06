---
type: entity
title: "Insurance Application"
---

# Insurance Application

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A formal request for insurance containing applicant declarations and risk information.

Logical attributes: Application Identifier; Application Number; Application Type; Application Status; Submitted Date; Requested Effective Date; Applicant; Product Version; Source Channel.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#insurance-application) | Insurance Application |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Applicant (review) | submits | [Insurance Application](insurance-application.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Insurance Application](insurance-application.md) | describes | [Risk Item](risk-item.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
