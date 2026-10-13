---
type: primary-entity
title: "Quote"
---

# Quote

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

A time-bounded proposed combination of Coverages, terms, premium, conditions, and assumptions.

Logical attributes: Quote Identifier; Quote Number; Quote Status; Requested Date; Quoted Date; Expiration Date; Currency; Total Premium; Producer; Product Version.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#quote) | Quote |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Quote](quote.md) | contains | [Quote Option](quote-option.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
