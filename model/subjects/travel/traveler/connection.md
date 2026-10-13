---
type: entity
title: "Connection"
---

# Connection

Subject: [Travel](../README.md). ABE: [Traveler](README.md).

## Definition and detail

A relationship between consecutive Segments requiring continuity or transfer.

Logical attributes: Connection Identifier; Connection Type; Minimum Connection Time; Planned Connection Time; Protected Indicator; Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#connection) | Connection |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Segment](segment.md) | connects through | Connection | 1:M | [travel](../../../../industry-patterns/travel.md) |
