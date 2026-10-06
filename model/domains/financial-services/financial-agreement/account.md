---
type: entity
title: "Account"
---

# Account

Domain: [Financial Services](../README.md). ABE: [Financial Agreement](README.md).

## Definition and detail

An operational record used to hold, track, service, or report financial value or obligations under an Agreement.

Logical attributes: Account Identifier; Account Number; Account Type; Account Status; Currency; Opened Date; Closed Date; Product Version; Servicing Unit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#account) | Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Agreement](financial-agreement.md) | governs | [Account](account.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Account](account.md) | has | [Account Party](account-party.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Account](account.md) | relates to | [Account](account.md) | M:M through Account Relationship | [financial-services](../../../../patterns/financial-services.md) |
| [Account](account.md) | has | Balance, Limit, and Hold (review) | 1:M each | [financial-services](../../../../patterns/financial-services.md) |
| [Account](account.md) | produces | [Statement](../statement/statement.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
