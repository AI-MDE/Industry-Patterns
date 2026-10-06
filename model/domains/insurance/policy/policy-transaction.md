---
type: entity
title: "Policy Transaction"
---

# Policy Transaction

Domain: [Insurance](../README.md). ABE: [Policy](README.md).

## Definition and detail

A versioned business transaction changing the Policy or its financial effect.

Logical attributes: Policy Transaction Identifier; Transaction Type; Transaction Status; Requested Date; Effective Date; Processed Date; Reason; Prior Policy Version; Resulting Policy Version.

Types include issue, bind, endorsement, renewal, cancellation, reinstatement, rewrite, and non-renewal.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#policy-transaction) | Policy Transaction |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy](policy.md) | changes through | [Policy Transaction](policy-transaction.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Policy Transaction](policy-transaction.md) | may create | [Endorsement](endorsement.md) | 1:0..M | [insurance](../../../../patterns/insurance.md) |
