---
type: entity
title: "Trade Order"
---

# Trade Order

Subject: [Financial Accounts](../README.md). ABE: [Financial Instrument](README.md).

Specializes: [Order](../../request/order/order.md). Inherit its meaning; apply the refinements below in this context.

Also known as: Order (Financial Services).

## Definition and detail

An Instruction to buy, sell, subscribe, redeem, or otherwise transact in a Financial Instrument.

Logical attributes: Order Identifier; Order Type; Order Status; Entered Time; Account; Instrument; Side; Quantity; Limit Price; Time in Force.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#order) | Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Order | executes as | [Trade](trade.md) | 1:0..M | [financial-services](../../../../industry-patterns/financial-services.md) |
