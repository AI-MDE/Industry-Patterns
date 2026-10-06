---
type: entity
title: "Service Specification"
---

# Service Specification

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Product](README.md).

## Definition and detail

A reusable definition of the technical and operational behavior of a Service.

Logical attributes: Service Specification Identifier; Name; Service Type; Version; Status; Performance Profile; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#service-specification) | Service Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Component](product-component.md) | maps to | [Service Specification](service-specification.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Specification](service-specification.md) | requires | [Resource Specification](resource-specification.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Service Instance](../service-instance/service-instance.md) | instantiates | [Service Specification](service-specification.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
