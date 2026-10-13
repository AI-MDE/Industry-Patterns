---
type: entity
title: "Product Specification"
---

# Product Specification

Subject: [Production](../README.md). ABE: [Bill of Material](README.md).

## Definition and detail

A controlled requirement for form, fit, function, material, performance, labeling, packaging, or acceptance.

Logical attributes: Specification Identifier; Specification Type; Version; Status; Requirement; Unit; Tolerance; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#product-specification) | Product Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Version](../../product/product/product-version.md) | has | Product Specification | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
