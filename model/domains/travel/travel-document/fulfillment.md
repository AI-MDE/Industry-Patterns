---
type: entity
title: "Fulfillment"
---

# Fulfillment

Domain: [Travel](../README.md). ABE: [Travel Document](README.md).

Specializes: [Fulfillment](../../request-and-fulfillment/request/fulfillment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Evidence that a booked travel service or ancillary was delivered, used, boarded, checked in, stayed, rented, attended, or otherwise consumed.

Logical attributes: Fulfillment Identifier; Fulfillment Type; Fulfillment Status; Started At; Completed At; Quantity; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#fulfillment) | Fulfillment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Travel Document](travel-document.md) | authorizes | [Fulfillment](fulfillment.md) | 1:M | [travel](../../../../patterns/travel.md) |
