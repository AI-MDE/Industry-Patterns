---
type: primary-entity
title: "Routing"
---

# Routing

Domain: [Manufacturing](../README.md). ABE: [Routing](README.md).

## Definition and detail

A versioned sequence or network of Operations required to manufacture a Product.

Logical attributes: Routing Identifier; Version; Status; Product Version; Facility; Effective From; Effective Through; Standard Lead Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#routing) | Routing |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Routing](routing.md) | contains | [Operation Definition](operation-definition.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
