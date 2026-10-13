---
type: entity
title: "Refund"
---

# Refund

Subject: [Billing and Payments](../README.md). ABE: [Payment](README.md).

Also known as: Refund (Travel).

## Definition and detail

A transfer of value back to a Customer or Payer.

Logical attributes: Refund Identifier; Refund Reference; Refund Amount; Currency; Refund Reason; Refund Status; Requested At; Completed At.

### In industries

- **Refund** (Travel): A return of money or credit arising from cancellation, change, disruption, overpayment, or service failure. Attributes: Refund Identifier; Refund Type; Refund Status; Requested At; Approved At; Completed At; Amount; Currency; Beneficiary; Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#refund) | Refund |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#refund) | Refund |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Return](../../fulfillment/return/return.md) | may cause | Refund | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Cancellation or Booking Change (review) | may produce | Refund | 1:M | [travel](../../../../industry-patterns/travel.md) |
