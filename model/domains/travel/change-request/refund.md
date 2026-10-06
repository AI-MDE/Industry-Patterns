---
type: entity
title: "Refund"
---

# Refund

Domain: [Travel](../README.md). ABE: [Change Request](README.md).

## Definition and detail

A return of money or credit arising from cancellation, change, disruption, overpayment, or service failure.

Logical attributes: Refund Identifier; Refund Type; Refund Status; Requested At; Approved At; Completed At; Amount; Currency; Beneficiary; Reason.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#refund) | Refund |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Cancellation or Booking Change (review) | may produce | [Refund](refund.md) | 1:M | [travel](../../../../patterns/travel.md) |
