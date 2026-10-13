---
type: entity
title: "Account Party"
---

# Account Party

Domain: [Financial Services](../README.md). ABE: [Financial Agreement](README.md).

## Definition and detail

A Party participating in an Account in a stated role.

Logical attributes: Account Party Identifier; Role Type; Role Status; Ownership Percentage; Authority Level; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#account-party) | Account Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Account](account.md) | has | [Account Party](account-party.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
