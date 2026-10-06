---
type: entity
title: "Product Specification"
---

# Product Specification

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

A controlled requirement for form, fit, function, material, performance, labeling, packaging, or acceptance.

Logical attributes: Specification Identifier; Specification Type; Version; Status; Requirement; Unit; Tolerance; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#product-specification) | Product Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Version](product-version.md) | has | [Product Specification](product-specification.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
