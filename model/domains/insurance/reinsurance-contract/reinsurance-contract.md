---
type: primary-entity
title: "Reinsurance Contract"
---

# Reinsurance Contract

Domain: [Insurance](../README.md). ABE: [Reinsurance Contract](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement under which a Reinsurer accepts defined insurance risk from an Insurer.

Logical attributes: Reinsurance Contract Identifier; Contract Number; Contract Type; Status; Effective Date; Expiration Date; Currency; Reinsurer.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#reinsurance-contract) | Reinsurance Contract |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reinsurance Contract](reinsurance-contract.md) | contains | [Reinsurance Coverage](reinsurance-coverage.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
