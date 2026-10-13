---
type: entity
title: "Service Impact"
---

# Service Impact

Subject: [Service Provisioning and Networks](../README.md). ABE: [Outage](README.md).

## Definition and detail

An assessment of which Services, Customers, locations, or obligations are affected by an Event or Resource condition.

Logical attributes: Impact Identifier; Event; Service; Impact Type; Severity; Start Time; End Time; Customer Impact; SLA Impact.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-impact) | Service Impact |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Alarm or Outage (review) | creates | Service Impact | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
