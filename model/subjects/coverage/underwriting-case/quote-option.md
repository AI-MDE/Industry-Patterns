---
type: entity
title: "Quote Option"
---

# Quote Option

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Underwriting Case](README.md).

## Definition and detail

One alternative configuration within a Quote.

Logical attributes: Quote Option Identifier; Option Name; Option Status; Premium; Fees; Taxes; Effective Date; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#quote-option) | Quote Option |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Quote](../../request/quote/quote.md) | contains | Quote Option | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Quote Option | proposes | Coverage configuration (review) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
