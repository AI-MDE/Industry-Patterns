---
type: entity
title: "Position"
---

# Position

Domain: [Financial Services](../README.md). ABE: [Financial Instrument](README.md).

## Definition and detail

The quantity, cost, value, and exposure for an Instrument in an Account or Portfolio.

Logical attributes: Position Identifier; Position Date; Account or Portfolio; Instrument; Quantity; Cost Basis; Market Value; Currency; Source.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#position) | Position |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Trade](trade.md) | changes | [Position](position.md) | M:M | [financial-services](../../../../patterns/financial-services.md) |
