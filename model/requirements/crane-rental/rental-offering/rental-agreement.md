---
type: entity
title: "Rental Agreement"
---

# Rental Agreement

Domain: [Crane Rental](../README.md). ABE: [Rental Offering](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement governing equipment custody, services, responsibility, pricing, risk allocation, timing, and return.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Customer; Provider; Effective Date; Expiration Date; Currency; Billing Terms; Master Agreement Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#rental-agreement) | Rental Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Rental Agreement](rental-agreement.md) | governs | [Job Order](job-order.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
