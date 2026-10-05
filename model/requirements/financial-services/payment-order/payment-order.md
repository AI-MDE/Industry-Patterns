---
type: primary-entity
title: "Payment Order"
---

# Payment Order

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

An Instruction to transfer money from a Payer to a Payee.

Logical attributes: Payment Order Identifier; Payment Type; Payment Status; Initiated Time; Requested Execution Date; Payer; Payee; Amount; Currency; Purpose; End-to-End Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#payment-order) | Payment Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Payment Order](payment-order.md) | has | [Payment Party](payment-party.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Payment Order](payment-order.md) | produces | [Financial Transaction](../financial-instruction/financial-transaction.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Payment Order](payment-order.md) | exchanges through | [Clearing Item](clearing-item.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
