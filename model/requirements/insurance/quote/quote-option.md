---
type: entity
title: "Quote Option"
---

# Quote Option

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

One alternative configuration within a Quote.

Logical attributes: Quote Option Identifier; Option Name; Option Status; Premium; Fees; Taxes; Effective Date; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#quote-option) | Quote Option |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Quote](quote.md) | contains | [Quote Option](quote-option.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Quote Option](quote-option.md) | proposes | Coverage configuration (review) | 1:M | [insurance](../../../../patterns/insurance.md) |
