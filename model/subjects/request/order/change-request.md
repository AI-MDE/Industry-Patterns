---
type: entity
title: "Change Request"
---

# Change Request

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Also known as: Change Order (Crane Rental), Change Request (Travel), Booking Change (Travel).

## Definition and detail

A governed change to scope, schedule, equipment, configuration, personnel, assumptions, price, or responsibility.

Logical attributes: Change Order Identifier; Change Type; Change Status; Requested Date; Approved Date; Reason; Scope Change; Price Change; Schedule Impact; Approved By.

### In industries

- **Change Request** (Travel): A request to modify Traveler, date, route, service, class, room, vehicle, ancillary, or another Booking condition. Attributes: Change Request Identifier; Change Type; Change Status; Requested At; Requested By; Reason; Affected Items; Desired Result.
- **Booking Change** (Travel): An accepted modification with commercial and fulfillment consequences. Attributes: Booking Change Identifier; Change Type; Change Status; Effective At; Prior Item Reference; Resulting Item Reference; Additional Collection; Refund Amount; Penalty.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#change-order) | Change Order |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#change-request) | Change Request |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#booking-change) | Booking Change |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Booking or Booking Item (review) | receives | Change Request | 1:M | [travel](../../../../industry-patterns/travel.md) |
| Accepted Change Request (review) | produces | Booking Change | 1:1 | [travel](../../../../industry-patterns/travel.md) |
