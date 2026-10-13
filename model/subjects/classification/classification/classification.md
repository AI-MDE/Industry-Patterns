---
type: entity
title: "Classification"
---

# Classification

Subject: [Classification](../README.md). ABE: [Classification](README.md).

## Definition and detail

A category within a Classification Scheme.

Logical attributes: Classification Identifier; Classification Code; Classification Name; Description; Parent Classification reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#classification) | Classification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Classification Scheme](classification-scheme.md) | contains | Classification | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Classification | has parent | Classification | M:0..1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
