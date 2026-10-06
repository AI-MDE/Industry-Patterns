---
type: entity
title: "Customer Case"
---

# Customer Case

Domain: [E-Commerce](../README.md). ABE: [Cancellation](README.md).

## Definition and detail

A service inquiry, complaint, delivery problem, dispute, or exception related to commerce activity.

Logical attributes: Case Identifier; Case Type; Case Status; Priority; Opened At; Closed At; Resolution; Customer reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#customer-case) | Customer Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | opens | [Customer Case](customer-case.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
