---
type: entity
title: "Production Run"
---

# Production Run

Subject: [Production](../README.md). ABE: [Production Run](README.md).

## Definition and detail

A bounded execution of manufacturing work for an Order, batch, shift, or campaign.

Logical attributes: Run Identifier; Run Number; Run Type; Run Status; Manufacturing Order; Start Time; End Time; Work Center; Supervisor.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#production-run) | Production Run |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Manufacturing Order](../manufacturing-order/manufacturing-order.md) | has | Production Run | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
