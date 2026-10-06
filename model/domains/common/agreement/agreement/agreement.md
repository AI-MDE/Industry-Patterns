---
type: primary-entity
title: "Agreement"
---

# Agreement

Domain: [Agreement](../README.md). ABE: [Agreement](README.md).

## Definition and detail

A recorded understanding among Parties that establishes rights, obligations, terms, or constraints.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#agreement) | Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Agreement](agreement.md) | includes | [Agreement Role](agreement-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Agreement](agreement.md) | contains | [Agreement Term](agreement-term.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Agreement](agreement.md) | establishes | Commitment or Entitlement (review) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
