---
type: entity
title: "Investment Position"
---

# Investment Position

Subject: [Financial Accounts](../README.md). ABE: [Financial Instrument](README.md).

Also known as: Position (Financial Services).

## Definition and detail

The quantity, cost, value, and exposure for an Instrument in an Account or Portfolio.

Logical attributes: Position Identifier; Position Date; Account or Portfolio; Instrument; Quantity; Cost Basis; Market Value; Currency; Source.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#position) | Position |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Trade](trade.md) | changes | Position | M:M | [financial-services](../../../../industry-patterns/financial-services.md) |
