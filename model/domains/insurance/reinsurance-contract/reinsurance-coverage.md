---
type: entity
title: "Reinsurance Coverage"
---

# Reinsurance Coverage

Domain: [Insurance](../README.md). ABE: [Reinsurance Contract](README.md).

## Definition and detail

The layer, share, limit, retention, territory, portfolio, or peril protected by a Reinsurance Contract.

Logical attributes: Reinsurance Coverage Identifier; Coverage Type; Attachment Point; Limit; Share Percentage; Reinstatement Terms.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#reinsurance-coverage) | Reinsurance Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reinsurance Contract](reinsurance-contract.md) | contains | [Reinsurance Coverage](reinsurance-coverage.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
