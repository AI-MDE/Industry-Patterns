---
type: entity
title: "Product Application"
---

# Product Application

Domain: [Financial Services](../README.md). ABE: [Customer Profile](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A request to establish or change a Financial Agreement or Account.

Logical attributes: Application Identifier; Application Number; Application Type; Application Status; Submitted Date; Requested Product Version; Applicant; Channel; Decision Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#product-application) | Product Application |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Applicant (review) | submits | [Product Application](product-application.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
