---
type: primary-entity
title: "Resource Reservation"
---

# Resource Reservation

Domain: [Telecommunications](../README.md). ABE: [Resource Reservation](README.md).

## Definition and detail

A temporary allocation of resource or capacity for an Order.

Logical attributes: Reservation Identifier; Resource or Pool; Quantity; Service Order; Reserved From; Reserved Through; Status; Expiration.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#resource-reservation) | Resource Reservation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Resource Reservation](resource-reservation.md) | reserves | Network Resource or capacity (review) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
