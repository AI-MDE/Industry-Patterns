---
type: entity
title: "Billing Account"
---

# Billing Account

Domain: [Telecommunications](../README.md). ABE: [Customer Account](README.md).

## Definition and detail

A grouping of recurring, usage, one-time, adjustment, tax, invoice, and payment activity.

Logical attributes: Billing Account Identifier; Billing Account Number; Status; Bill Cycle; Currency; Payment Terms; Responsible Party; Delivery Preference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#billing-account) | Billing Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Customer Account](customer-account.md) | has | [Billing Account](billing-account.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Billing Account](billing-account.md) | receives | Charge, Invoice, and Payment (review) | 1:M each | [telecommunications](../../../../patterns/telecommunications.md) |
