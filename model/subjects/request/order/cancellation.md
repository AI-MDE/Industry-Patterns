---
type: entity
title: "Cancellation"
---

# Cancellation

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Also known as: Cancellation (Travel).

## Definition and detail

An accepted request to stop an unfulfilled or partially fulfilled Order or Order Line.

Logical attributes: Cancellation Identifier; Cancellation Reason; Cancellation Status; Requested At; Accepted At; Cancelled Quantity.

### In industries

- **Cancellation** (Travel): An accepted request or supplier action terminating all or part of a Reservation or Booking. Attributes: Cancellation Identifier; Cancellation Type; Cancellation Status; Requested At; Effective At; Reason; Cancelled Quantity; Penalty.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#cancellation) | Cancellation |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#cancellation) | Cancellation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Order or Order Line (review) | receives | Cancellation | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Booking or Booking Item (review) | receives | Cancellation | 1:M | [travel](../../../../industry-patterns/travel.md) |
