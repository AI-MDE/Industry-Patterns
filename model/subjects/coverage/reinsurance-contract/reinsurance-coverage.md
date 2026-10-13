---
type: entity
title: "Reinsurance Coverage"
---

# Reinsurance Coverage

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Reinsurance Contract](README.md).

## Definition and detail

The layer, share, limit, retention, territory, portfolio, or peril protected by a Reinsurance Contract.

Logical attributes: Reinsurance Coverage Identifier; Coverage Type; Attachment Point; Limit; Share Percentage; Reinstatement Terms.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#reinsurance-coverage) | Reinsurance Coverage |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reinsurance Contract](reinsurance-contract.md) | contains | Reinsurance Coverage | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
