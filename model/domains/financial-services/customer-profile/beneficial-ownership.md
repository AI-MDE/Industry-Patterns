---
type: entity
title: "Beneficial Ownership"
---

# Beneficial Ownership

Domain: [Financial Services](../README.md). ABE: [Customer Profile](README.md).

## Definition and detail

An effective-dated relationship identifying natural persons who ultimately own or control a legal entity, arrangement, Account, or assets.

Logical attributes: Ownership Identifier; Ownership Type; Ownership Percentage; Control Basis; Effective From; Effective Through; Verification Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#beneficial-ownership) | Beneficial Ownership |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | has | [Beneficial Ownership](beneficial-ownership.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
