---
type: primary-entity
title: "Production Run"
---

# Production Run

Domain: [Manufacturing](../README.md). ABE: [Production Run](README.md).

## Definition and detail

A bounded execution of manufacturing work for an Order, batch, shift, or campaign.

Logical attributes: Run Identifier; Run Number; Run Type; Run Status; Manufacturing Order; Start Time; End Time; Work Center; Supervisor.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#production-run) | Production Run |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Order](../manufacturing-requirement/manufacturing-order.md) | has | [Production Run](production-run.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
