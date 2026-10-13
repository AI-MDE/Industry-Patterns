---
type: entity
title: "Network Endpoint"
---

# Network Endpoint

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

A termination or attachment point through which a Service or Connection participates in a Network.

Logical attributes: Endpoint Identifier; Endpoint Type; Status; Resource; Location; Address or Identifier; Capacity; Direction.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#network-endpoint) | Network Endpoint |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Circuit](circuit.md) | connects | Network Endpoint | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
