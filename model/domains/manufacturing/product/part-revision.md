---
type: entity
title: "Part Revision"
---

# Part Revision

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

A controlled version of a Part's definition and specifications.

Logical attributes: Part Revision Identifier; Revision; Status; Effective From; Effective Through; Change Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#part-revision) | Part Revision |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [BOM Component](bom-component.md) | references | [Part Revision](part-revision.md) | M:1 | [manufacturing](../../../../patterns/manufacturing.md) |
