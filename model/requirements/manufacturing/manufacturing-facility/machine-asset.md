---
type: entity
title: "Machine Asset"
---

# Machine Asset

Domain: [Manufacturing](../README.md). ABE: [Manufacturing Facility](README.md).

## Definition and detail

An individual production machine, line, cell, device, or equipment asset.

Logical attributes: Asset Identifier; Asset Number; Asset Type; Model; Serial Number; Status; Work Center; Commissioned Date; Meter Reading.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#machine-asset) | Machine Asset |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Center](work-center.md) | contains | [Machine Asset](machine-asset.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
