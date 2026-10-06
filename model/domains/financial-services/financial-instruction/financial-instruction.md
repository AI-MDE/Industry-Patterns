---
type: primary-entity
title: "Financial Instruction"
---

# Financial Instruction

Domain: [Financial Services](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

A request or command to perform a financial action.

Logical attributes: Instruction Identifier; Instruction Type; Instruction Status; Received Time; Requested Execution Time; Initiating Party; Channel; Account; Amount; Currency; Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-instruction) | Financial Instruction |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Account or Party (review) | submits | [Financial Instruction](financial-instruction.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
