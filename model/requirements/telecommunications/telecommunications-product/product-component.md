---
type: entity
title: "Product Component"
---

# Product Component

Domain: [Telecommunications](../README.md). ABE: [Telecommunications Product](README.md).

Specializes: [Product Component](../../product-and-service/product/product-component.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A required, optional, or conditional element of a Product bundle.

Logical attributes: Component Identifier; Component Type; Referenced Product or Service Specification; Minimum Quantity; Maximum Quantity; Default Indicator; Dependency Rule.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#product-component) | Product Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Version](product-version.md) | contains | [Product Component](product-component.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Product Component](product-component.md) | maps to | [Service Specification](service-specification.md) | M:M | [telecommunications](../../../../patterns/telecommunications.md) |
