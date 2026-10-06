---
type: entity
title: "Trade"
---

# Trade

Domain: [Financial Services](../README.md). ABE: [Financial Instrument](README.md).

## Definition and detail

An executed agreement to exchange a Financial Instrument, money, or risk.

Logical attributes: Trade Identifier; Trade Type; Trade Status; Trade Date; Settlement Date; Instrument; Quantity; Price; Gross Amount; Currency; Counterparty.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#trade) | Trade |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | executes as | [Trade](trade.md) | 1:0..M | [financial-services](../../../../patterns/financial-services.md) |
| [Trade](trade.md) | changes | [Position](position.md) | M:M | [financial-services](../../../../patterns/financial-services.md) |
