---
type: entity
title: "Clearing Item"
---

# Clearing Item

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

A claim, message, or item exchanged through a payment, cheque, card, securities, or other clearing arrangement.

Logical attributes: Clearing Item Identifier; Clearing Scheme; Item Type; Item Status; Submitted Time; Clearing Date; Amount; Currency; Network Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#clearing-item) | Clearing Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Payment Order](payment-order.md) | exchanges through | [Clearing Item](clearing-item.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Clearing Item](clearing-item.md) | resolves through | [Settlement](settlement.md) | M:1 | [financial-services](../../../../patterns/financial-services.md) |
