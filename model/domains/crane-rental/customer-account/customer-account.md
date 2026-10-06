---
type: primary-entity
title: "Customer Account"
---

# Customer Account

Domain: [Crane Rental](../README.md). ABE: [Customer Account](README.md).

## Definition and detail

The Rental Provider's governed commercial relationship with a Customer.

Logical attributes: Customer Account Identifier; Account Status; Credit Status; Billing Terms; Tax Status; Responsible Branch; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#customer-account) | Customer Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | owns | [Customer Account](customer-account.md) | 1:M by provider | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
