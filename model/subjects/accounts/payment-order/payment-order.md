---
type: entity
title: "Payment Order"
---

# Payment Order

Subject: [Financial Accounts](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

An Instruction to transfer money from a Payer to a Payee.

Logical attributes: Payment Order Identifier; Payment Type; Payment Status; Initiated Time; Requested Execution Date; Payer; Payee; Amount; Currency; Purpose; End-to-End Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#payment-order) | Payment Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Payment Order | has | [Payment Party](../../party/party/party-role.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Payment Order | produces | [Financial Transaction](../financial-instruction/financial-transaction.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Payment Order | exchanges through | [Clearing Item](clearing-item.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
