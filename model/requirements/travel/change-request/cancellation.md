---
type: entity
title: "Cancellation"
---

# Cancellation

Domain: [Travel](../README.md). ABE: [Change Request](README.md).

## Definition and detail

An accepted request or supplier action terminating all or part of a Reservation or Booking.

Logical attributes: Cancellation Identifier; Cancellation Type; Cancellation Status; Requested At; Effective At; Reason; Cancelled Quantity; Penalty.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#cancellation) | Cancellation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Booking or Booking Item (review) | receives | [Cancellation](cancellation.md) | 1:M | [travel](../../../../patterns/travel.md) |
