---
type: entity
title: "Network Endpoint"
---

# Network Endpoint

Domain: [Telecommunications](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

A termination or attachment point through which a Service or Connection participates in a Network.

Logical attributes: Endpoint Identifier; Endpoint Type; Status; Resource; Location; Address or Identifier; Capacity; Direction.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#network-endpoint) | Network Endpoint |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Circuit](circuit.md) | connects | [Network Endpoint](network-endpoint.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
