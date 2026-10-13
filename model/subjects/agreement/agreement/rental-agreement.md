---
type: entity
title: "Rental Agreement"
---

# Rental Agreement

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

Specializes: [Agreement](agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement governing equipment custody, services, responsibility, pricing, risk allocation, timing, and return.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Customer; Provider; Effective Date; Expiration Date; Currency; Billing Terms; Master Agreement Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#rental-agreement) | Rental Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Rental Agreement | governs | [Job Order](../../work/work-effort/work-order.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
