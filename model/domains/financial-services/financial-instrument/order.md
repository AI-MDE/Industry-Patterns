---
type: entity
title: "Order"
---

# Order

Domain: [Financial Services](../README.md). ABE: [Financial Instrument](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Instruction to buy, sell, subscribe, redeem, or otherwise transact in a Financial Instrument.

Logical attributes: Order Identifier; Order Type; Order Status; Entered Time; Account; Instrument; Side; Quantity; Limit Price; Time in Force.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#order) | Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | executes as | [Trade](trade.md) | 1:0..M | [financial-services](../../../../patterns/financial-services.md) |
