---
type: primary-entity
title: "Change Request"
---

# Change Request

Domain: [Travel](../README.md). ABE: [Change Request](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A request to modify Traveler, date, route, service, class, room, vehicle, ancillary, or another Booking condition.

Logical attributes: Change Request Identifier; Change Type; Change Status; Requested At; Requested By; Reason; Affected Items; Desired Result.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#change-request) | Change Request |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Booking or Booking Item (review) | receives | [Change Request](change-request.md) | 1:M | [travel](../../../../patterns/travel.md) |
