---
type: entity
title: "Service Activation"
---

# Service Activation

Domain: [Telecommunications](../README.md). ABE: [Resource Reservation](README.md).

## Definition and detail

An authorized event making a Service available for use and, where applicable, billing.

Logical attributes: Activation Identifier; Service; Activation Status; Requested At; Activated At; Activated By; Configuration; Test Evidence; Billing Effective Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-activation) | Service Activation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Activation](service-activation.md) | activates | [Service Instance](../service-instance/service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
