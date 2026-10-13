---
type: entity
title: "Schedule"
---

# Schedule

Subject: [Scheduling and Reservations](../README.md). ABE: [Appointment](README.md).

Also known as: Production Schedule (Manufacturing), Schedule (Travel).

## Definition and detail

Planned availability of a Provider, service, resource, or Location.

Logical attributes: Schedule Identifier; Schedule Type; Effective From; Effective Through; Time Zone; Capacity; Schedule Status.

### In industries

- **Production Schedule** (Manufacturing): A time-phased commitment or proposal for manufacturing work. Attributes: Schedule Identifier; Schedule Type; Period; Facility; Status; Frozen Horizon; Planned Quantity.
- **Schedule** (Travel): A governed pattern of planned Service Instances. Attributes: Schedule Identifier; Schedule Type; Operating Days; Start Time; End Time; Time Zone; Effective From; Effective Through; Schedule Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#schedule) | Schedule |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#production-schedule) | Production Schedule |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#schedule) | Schedule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Schedule | allocates availability for | Provider, Service, or Location (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| Schedule | generates or governs | [Service Instance](../../travel/scheduled-service/scheduled-service.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
