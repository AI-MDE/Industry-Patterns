---
type: primary-entity
title: "Customer Account"
---

# Customer Account

Domain: [Telecommunications](../README.md). ABE: [Customer Account](README.md).

## Definition and detail

The provider's commercial relationship with a Customer.

Logical attributes: Customer Account Identifier; Account Number; Account Status; Customer; Segment; Credit Status; Responsible Organization; Opened Date; Closed Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#customer-account) | Customer Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | owns | [Customer Account](customer-account.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
| [Customer Account](customer-account.md) | has | [Billing Account](billing-account.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
