---
type: primary-entity
title: "Request"
---

# Request

Domain: [Request and Fulfillment](../README.md). ABE: [Request](README.md).

## Definition and detail

An expressed need for information, evaluation, authorization, service, product, or action.

Logical attributes: Request Identifier; Request Type; Request Status; Requested Date; Needed By Date; Priority; Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#request) | Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Request](request.md) | may become | [Order](order.md) | 1:0..1 | [cross-industry](../../../../patterns/cross-industry.md) |
