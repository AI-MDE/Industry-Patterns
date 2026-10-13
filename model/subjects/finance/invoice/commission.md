---
type: entity
title: "Commission"
---

# Commission

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

Also known as: Commission or Markup (Travel).

## Definition and detail

Compensation payable to a Producer or distribution Party.

Logical attributes: Commission Identifier; Commission Type; Basis Amount; Rate; Commission Amount; Status; Earned Date; Payable Date.

### In industries

- **Commission or Markup** (Travel): Distributor compensation or price adjustment. Attributes: Compensation Identifier; Type; Basis Amount; Rate; Amount; Currency; Status; Recipient.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#commission) | Commission |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#commission-or-markup) | Commission or Markup |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Producer (review) | earns | Commission | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
