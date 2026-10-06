---
type: primary-entity
title: "Financial Agreement"
---

# Financial Agreement

Domain: [Financial Services](../README.md). ABE: [Financial Agreement](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A contract governing a financial relationship, product, facility, or service.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Governing Law; Product Version; Institution.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-agreement) | Financial Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Accepted Application (review) | establishes | [Financial Agreement](financial-agreement.md) | 1:0..M | [financial-services](../../../../patterns/financial-services.md) |
| [Financial Agreement](financial-agreement.md) | governs | [Account](account.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
