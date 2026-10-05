---
type: entity
title: "Alarm"
---

# Alarm

Domain: [Telecommunications](../README.md). ABE: [Trouble Ticket](README.md).

## Definition and detail

A system-generated indication of a resource, service, capacity, configuration, or environmental condition.

Logical attributes: Alarm Identifier; Alarm Type; Severity; Alarm Status; Raised At; Cleared At; Resource; Probable Cause; Correlation Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#alarm) | Alarm |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Alarm](alarm.md) | concerns | [Network Resource](../service-instance/network-resource.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
