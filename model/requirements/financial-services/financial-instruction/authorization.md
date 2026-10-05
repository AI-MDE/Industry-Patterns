---
type: entity
title: "Authorization"
---

# Authorization

Domain: [Financial Services](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

An evidence-based decision permitting or declining an Instruction or Transaction.

Logical attributes: Authorization Identifier; Authorization Type; Authorization Status; Requested Time; Decision Time; Decision Reason; Authorized Amount; Currency; Actor or System; Rule Evidence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#authorization) | Authorization |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Instruction (review) | receives | [Authorization](authorization.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
