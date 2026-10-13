---
type: entity
title: "Account"
---

# Account

Subject: [Financial Accounts](../README.md). ABE: [Financial Agreement](README.md).

## Definition and detail

An operational record used to hold, track, service, or report financial value or obligations under an Agreement.

Logical attributes: Account Identifier; Account Number; Account Type; Account Status; Currency; Opened Date; Closed Date; Product Version; Servicing Unit.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#account) | Account |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Agreement](financial-agreement.md) | governs | Account | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Account | has | [Account Party](../../party/party/party-role.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Account | relates to | Account | M:M through Account Relationship | [financial-services](../../../../industry-patterns/financial-services.md) |
| Account | has | Balance, Limit, and Hold (review) | 1:M each | [financial-services](../../../../industry-patterns/financial-services.md) |
| Account | produces | [Statement](statement.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
