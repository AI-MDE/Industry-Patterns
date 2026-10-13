---
type: entity
title: "Request"
---

# Request

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Request](README.md).

## Definition and detail

An expressed need for information, evaluation, authorization, service, product, or action.

Logical attributes: Request Identifier; Request Type; Request Status; Requested Date; Needed By Date; Priority; Description.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#request) | Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Request | may become | [Order](../order/order.md) | 1:0..1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
