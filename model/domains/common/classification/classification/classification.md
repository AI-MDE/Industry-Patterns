---
type: primary-entity
title: "Classification"
---

# Classification

Domain: [Classification](../README.md). ABE: [Classification](README.md).

## Definition and detail

A category within a Classification Scheme.

Logical attributes: Classification Identifier; Classification Code; Classification Name; Description; Parent Classification reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#classification) | Classification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Classification Scheme](classification-scheme.md) | contains | [Classification](classification.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Classification](classification.md) | has parent | [Classification](classification.md) | M:0..1 | [cross-industry](../../../../patterns/cross-industry.md) |
