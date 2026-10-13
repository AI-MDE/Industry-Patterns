---
type: entity
title: "Reinsurance Claim"
---

# Reinsurance Claim

Domain: [Insurance](../README.md). ABE: [Reinsurance Contract](README.md).

## Definition and detail

A request to a Reinsurer for recoverable amounts.

Logical attributes: Reinsurance Claim Identifier; Status; Reported Date; Gross Loss; Retention; Recoverable Amount; Paid Amount.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#reinsurance-claim) | Reinsurance Claim |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](../loss-event/claim.md) | may produce | [Reinsurance Claim](reinsurance-claim.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
