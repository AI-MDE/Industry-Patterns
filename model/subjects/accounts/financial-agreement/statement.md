---
type: entity
title: "Statement"
---

# Statement

Subject: [Financial Accounts](../README.md). ABE: [Financial Agreement](README.md).

## Definition and detail

A governed presentation of Account activity, balances, fees, interest, and required disclosures for a period.

Logical attributes: Statement Identifier; Statement Type; Period Start; Period End; Generated Date; Account; Opening Balance; Closing Balance; Currency; Delivery Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#statement) | Statement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Account](account.md) | produces | Statement | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
