---
type: primary-entity
title: "Statement"
---

# Statement

Domain: [Financial Services](../README.md). ABE: [Statement](README.md).

## Definition and detail

A governed presentation of Account activity, balances, fees, interest, and required disclosures for a period.

Logical attributes: Statement Identifier; Statement Type; Period Start; Period End; Generated Date; Account; Opening Balance; Closing Balance; Currency; Delivery Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#statement) | Statement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Account](../financial-agreement/account.md) | produces | [Statement](statement.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
