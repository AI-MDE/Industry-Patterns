---
type: primary-entity
title: "Cancellation"
---

# Cancellation

Domain: [E-Commerce](../README.md). ABE: [Cancellation](README.md).

## Definition and detail

An accepted request to stop an unfulfilled or partially fulfilled Order or Order Line.

Logical attributes: Cancellation Identifier; Cancellation Reason; Cancellation Status; Requested At; Accepted At; Cancelled Quantity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#cancellation) | Cancellation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Order or Order Line (review) | receives | [Cancellation](cancellation.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
