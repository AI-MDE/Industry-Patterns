---
type: entity
title: "Reconciliation Exception"
---

# Reconciliation Exception

Domain: [Financial Services](../README.md). ABE: [Payment Order](README.md).

## Definition and detail

An unmatched, inconsistent, duplicated, or out-of-balance item requiring resolution.

Logical attributes: Exception Identifier; Exception Type; Exception Status; Detected Time; Amount Difference; Currency; Assigned Role; Resolution; Resolved Time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#reconciliation-exception) | Reconciliation Exception |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Reconciliation](reconciliation.md) | identifies | [Reconciliation Exception](reconciliation-exception.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
