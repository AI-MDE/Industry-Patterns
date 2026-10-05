---
type: entity
title: "Bill of Material"
---

# Bill of Material

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

A versioned product structure describing required Parts and quantities.

Logical attributes: BOM Identifier; BOM Type; Version; Status; Parent Product or Part; Effective From; Effective Through; Base Quantity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#bill-of-material) | Bill of Material |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Bill of Material](bill-of-material.md) | contains | [BOM Component](bom-component.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
