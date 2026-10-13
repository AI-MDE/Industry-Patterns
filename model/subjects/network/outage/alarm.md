---
type: entity
title: "Alarm"
---

# Alarm

Subject: [Service Provisioning and Networks](../README.md). ABE: [Outage](README.md).

## Definition and detail

A system-generated indication of a resource, service, capacity, configuration, or environmental condition.

Logical attributes: Alarm Identifier; Alarm Type; Severity; Alarm Status; Raised At; Cleared At; Resource; Probable Cause; Correlation Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#alarm) | Alarm |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Alarm | concerns | [Network Resource](../service-instance/network-resource.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
