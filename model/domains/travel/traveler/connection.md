---
type: entity
title: "Connection"
---

# Connection

Domain: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

A relationship between consecutive Segments requiring continuity or transfer.

Logical attributes: Connection Identifier; Connection Type; Minimum Connection Time; Planned Connection Time; Protected Indicator; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#connection) | Connection |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Segment](segment.md) | connects through | [Connection](connection.md) | 1:M | [travel](../../../../patterns/travel.md) |
