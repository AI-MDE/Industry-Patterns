---
type: primary-entity
title: "Interconnect Agreement"
---

# Interconnect Agreement

Domain: [Telecommunications](../README.md). ABE: [Interconnect Agreement](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

An Agreement governing network interconnection, traffic exchange, rates, quality, and settlement with another Provider.

Logical attributes: Agreement Identifier; Agreement Number; Status; Partner; Effective Date; Expiration Date; Currency; Traffic Scope.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#interconnect-agreement) | Interconnect Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Interconnect Agreement](interconnect-agreement.md) | governs | Partner Service and Settlement (review) | 1:M | [telecommunications](../../../../patterns/telecommunications.md) |
