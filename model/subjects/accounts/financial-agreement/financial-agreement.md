---
type: entity
title: "Financial Agreement"
---

# Financial Agreement

Subject: [Financial Accounts](../README.md). ABE: [Financial Agreement](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A contract governing a financial relationship, product, facility, or service.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Governing Law; Product Version; Institution.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#financial-agreement) | Financial Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Application (review) | establishes | Financial Agreement | 1:0..M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Financial Agreement | governs | [Account](account.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
