---
type: entity
title: "Payment Party"
---

# Payment Party

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

A Party participating in a Payment Order in a specified role.

Logical attributes: Payment Party Identifier; Role Type; Party; Account Reference; Institution Reference; Name and Address Snapshot; Effective Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#payment-party) | Payment Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Payment Order](payment-order.md) | has | [Payment Party](payment-party.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
