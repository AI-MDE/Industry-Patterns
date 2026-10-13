---
type: entity
title: "Material Requirement"
---

# Material Requirement

Subject: [Production](../README.md). ABE: [Manufacturing Order](README.md).

## Definition and detail

An order-specific need for a Part Revision or material.

Logical attributes: Material Requirement Identifier; Part Revision; Required Quantity; Issued Quantity; Unit; Need Date; Source BOM Component; Substitute Status.

Rule: planned demand, scheduled work, Manufacturing Order, Production Run, and actual output are separate states of commitment and execution.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#material-requirement) | Material Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Order](manufacturing-order.md) | contains | Material Requirement | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Material Requirement | receives | Material Reservation and Issue (review) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
