---
type: entity
title: "Billing Account"
---

# Billing Account

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

Also known as: Billing Account (Telecommunications).

## Definition and detail

A financial account grouping Policy charges, invoices, payments, credits, and balances.

Logical attributes: Billing Account Identifier; Account Number; Account Status; Billing Method; Billing Frequency; Currency; Responsible Party.

### In industries

- **Billing Account** (Telecommunications): A grouping of recurring, usage, one-time, adjustment, tax, invoice, and payment activity. Attributes: Billing Account Identifier; Billing Account Number; Status; Bill Cycle; Currency; Payment Terms; Responsible Party; Delivery Preference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#billing-account) | Billing Account |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#billing-account) | Billing Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Billing Account | bills | [Policy](../../coverage/policy/policy.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Billing Account | receives | Invoice and Payment (review) | 1:M each | [insurance](../../../../industry-patterns/insurance.md) |
| [Customer Account](../../party/customer-account/customer-account.md) | has | Billing Account | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Billing Account | receives | Charge, Invoice, and Payment (review) | 1:M each | [telecommunications](../../../../industry-patterns/telecommunications.md) |
