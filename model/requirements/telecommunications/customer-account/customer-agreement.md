---
type: entity
title: "Customer Agreement"
---

# Customer Agreement

Domain: [Telecommunications](../README.md). ABE: [Customer Account](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement defining products, terms, commitments, pricing, service levels, responsibilities, and effective periods.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Provider; Customer; Effective Date; Expiration Date; Currency; Renewal Policy.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#customer-agreement) | Customer Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Customer Agreement](customer-agreement.md) | governs | [Subscription](subscription.md) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
