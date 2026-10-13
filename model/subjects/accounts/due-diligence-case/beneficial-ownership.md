---
type: entity
title: "Beneficial Ownership"
---

# Beneficial Ownership

Subject: [Financial Accounts](../README.md). ABE: [Due Diligence Case](README.md).

Specializes: [Party Relationship](../../party/party/party-relationship.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An effective-dated relationship identifying natural persons who ultimately own or control a legal entity, arrangement, Account, or assets.

Logical attributes: Ownership Identifier; Ownership Type; Ownership Percentage; Control Basis; Effective From; Effective Through; Verification Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#beneficial-ownership) | Beneficial Ownership |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | has | Beneficial Ownership | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
