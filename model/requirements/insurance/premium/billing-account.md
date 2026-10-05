---
type: entity
title: "Billing Account"
---

# Billing Account

Domain: [Insurance](../README.md). ABE: [Premium](README.md).

## Definition and detail

A financial account grouping Policy charges, invoices, payments, credits, and balances.

Logical attributes: Billing Account Identifier; Account Number; Account Status; Billing Method; Billing Frequency; Currency; Responsible Party.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#billing-account) | Billing Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Billing Account](billing-account.md) | bills | [Policy](../policy/policy.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Billing Account](billing-account.md) | receives | Invoice and Payment (review) | 1:M each | [insurance](../../../../patterns/insurance.md) |
