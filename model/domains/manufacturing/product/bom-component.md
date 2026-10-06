---
type: entity
title: "BOM Component"
---

# BOM Component

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

A Part's effective-dated participation in a Bill of Material.

Logical attributes: BOM Component Identifier; Component Part Revision; Quantity; Unit; Scrap Factor; Issue Method; Sequence; Effective From; Effective Through; Alternate Group.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#bom-component) | BOM Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Bill of Material](bill-of-material.md) | contains | [BOM Component](bom-component.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
| [BOM Component](bom-component.md) | references | [Part Revision](part-revision.md) | M:1 | [manufacturing](../../../../patterns/manufacturing.md) |
