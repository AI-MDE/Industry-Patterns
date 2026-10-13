---
type: entity
title: "Exception"
---

# Exception

Subject: [Cases and Decisions](../README.md). ABE: [Case](README.md).

Also known as: Reconciliation Exception (Financial Services).

## Definition and detail

An unmatched, inconsistent, duplicated, or out-of-balance item requiring resolution.

Logical attributes: Exception Identifier; Exception Type; Exception Status; Detected Time; Amount Difference; Currency; Assigned Role; Resolution; Resolved Time.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#reconciliation-exception) | Reconciliation Exception |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reconciliation](../../finance/payment/reconciliation.md) | identifies | Reconciliation Exception | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
