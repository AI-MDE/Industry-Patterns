---
type: entity
title: "Service Specification"
---

# Service Specification

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Specification](README.md).

## Definition and detail

A reusable definition of the technical and operational behavior of a Service.

Logical attributes: Service Specification Identifier; Name; Service Type; Version; Status; Performance Profile; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-specification) | Service Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Component](../../product/product/product-component.md) | maps to | Service Specification | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Service Specification | requires | [Resource Specification](resource-specification.md) | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Service Instance](../service-instance/service-instance.md) | instantiates | Service Specification | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
