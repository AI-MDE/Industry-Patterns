---
type: entity
title: "Service Delivery"
---

# Service Delivery

Domain: [Health Care](../README.md). ABE: [Health Care Service](README.md).

## Definition and detail

Evidence that a requested or planned Health Care Service was performed or supplied.

Logical attributes: Delivery Identifier; Delivery Status; Delivered Start; Delivered End; Quantity; Unit; Delivering Provider; Location; Result reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#service-delivery) | Service Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Delivery](service-delivery.md) | occurs within | Encounter, Episode, or Case (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
| [Service Delivery](service-delivery.md) | produces | [Charge](../coverage/charge.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
