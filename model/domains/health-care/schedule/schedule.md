---
type: primary-entity
title: "Schedule"
---

# Schedule

Domain: [Health Care](../README.md). ABE: [Schedule](README.md).

## Definition and detail

Planned availability of a Provider, service, resource, or Location.

Logical attributes: Schedule Identifier; Schedule Type; Effective From; Effective Through; Time Zone; Capacity; Schedule Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#schedule) | Schedule |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Schedule](schedule.md) | allocates availability for | Provider, Service, or Location (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
