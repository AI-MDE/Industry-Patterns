---
type: primary-entity
title: "Manufacturing Requirement"
---

# Manufacturing Requirement

Domain: [Manufacturing](../README.md). ABE: [Manufacturing Requirement](README.md).

## Definition and detail

A demand for a quantity of Product by a required date and destination.

Logical attributes: Requirement Identifier; Requirement Type; Product Version; Quantity; Unit; Required Date; Destination; Priority; Source.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#manufacturing-requirement) | Manufacturing Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Requirement](manufacturing-requirement.md) | produces | [Manufacturing Order](manufacturing-order.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
