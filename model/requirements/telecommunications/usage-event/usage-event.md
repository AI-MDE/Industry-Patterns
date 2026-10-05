---
type: primary-entity
title: "Usage Event"
---

# Usage Event

Domain: [Telecommunications](../README.md). ABE: [Usage Event](README.md).

## Definition and detail

A raw or source-received record of service consumption or network activity.

Logical attributes: Usage Event Identifier; Event Type; Source; Source Reference; Start Time; End Time; Quantity; Unit; Origin; Destination; Service Identifier; Received At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#usage-event) | Usage Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Instance](../service-instance/service-instance.md) | produces | [Usage Event](usage-event.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Usage Event](usage-event.md) | produces | [Mediation Record](mediation-record.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
