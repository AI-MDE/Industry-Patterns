---
type: entity
title: "Circuit"
---

# Circuit

Domain: [Telecommunications](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

A managed end-to-end or segment connectivity construct.

Logical attributes: Circuit Identifier; Circuit Number; Circuit Type; Circuit Status; Bandwidth; Start Endpoint; End Endpoint; Protection Type; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#circuit) | Circuit |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Circuit](circuit.md) | connects | [Network Endpoint](network-endpoint.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
