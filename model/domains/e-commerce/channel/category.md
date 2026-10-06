---
type: entity
title: "Category"
---

# Category

Domain: [E-Commerce](../README.md). ABE: [Channel](README.md).

Specializes: [Classification](../../classification/classification/classification.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A navigational or merchandising classification used within a Catalog.

Logical attributes: Category Identifier; Category Name; Category Code; Category Status; Parent Category reference; Display Sequence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#category) | Category |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Catalog](catalog.md) | contains | [Category](category.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Category](category.md) | classifies | [Offering](offering.md) | M:M | [e-commerce](../../../../patterns/e-commerce.md) |
