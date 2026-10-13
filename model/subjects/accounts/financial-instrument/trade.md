---
type: entity
title: "Trade"
---

# Trade

Subject: [Financial Accounts](../README.md). ABE: [Financial Instrument](README.md).

## Definition and detail

An executed agreement to exchange a Financial Instrument, money, or risk.

Logical attributes: Trade Identifier; Trade Type; Trade Status; Trade Date; Settlement Date; Instrument; Quantity; Price; Gross Amount; Currency; Counterparty.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#trade) | Trade |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](trade-order.md) | executes as | Trade | 1:0..M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Trade | changes | [Position](investment-position.md) | M:M | [financial-services](../../../../industry-patterns/financial-services.md) |
