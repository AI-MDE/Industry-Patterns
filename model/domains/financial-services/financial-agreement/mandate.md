---
type: entity
title: "Mandate"
---

# Mandate

Domain: [Financial Services](../README.md). ABE: [Financial Agreement](README.md).

## Definition and detail

An authorization from a Party defining who may initiate or approve which actions and under what conditions.

Logical attributes: Mandate Identifier; Mandate Type; Mandate Status; Granted By; Effective From; Effective Through; Action Scope; Amount Limit; Approval Rule.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#mandate) | Mandate |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](../../party/party/party.md) | grants | [Mandate](mandate.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Mandate](mandate.md) | authorizes | Party on Account (review) | M:M | [financial-services](../../../../patterns/financial-services.md) |
