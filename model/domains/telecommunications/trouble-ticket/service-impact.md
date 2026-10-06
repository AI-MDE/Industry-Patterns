---
type: entity
title: "Service Impact"
---

# Service Impact

Domain: [Telecommunications](../README.md). ABE: [Trouble Ticket](README.md).

## Definition and detail

An assessment of which Services, Customers, locations, or obligations are affected by an Event or Resource condition.

Logical attributes: Impact Identifier; Event; Service; Impact Type; Severity; Start Time; End Time; Customer Impact; SLA Impact.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-impact) | Service Impact |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Alarm or Outage (review) | creates | [Service Impact](service-impact.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
