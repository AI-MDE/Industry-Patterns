---
type: entity
title: "Financial Instruction"
---

# Financial Instruction

Subject: [Financial Accounts](../README.md). ABE: [Financial Instruction](README.md).

## Definition and detail

A request or command to perform a financial action.

Logical attributes: Instruction Identifier; Instruction Type; Instruction Status; Received Time; Requested Execution Time; Initiating Party; Channel; Account; Amount; Currency; Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#financial-instruction) | Financial Instruction |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Account or Party (review) | submits | Financial Instruction | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
