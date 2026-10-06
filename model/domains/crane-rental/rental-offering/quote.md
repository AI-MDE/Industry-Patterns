---
type: entity
title: "Quote"
---

# Quote

Domain: [Crane Rental](../README.md). ABE: [Rental Offering](README.md).

## Definition and detail

A time-bounded commercial proposal responding to a Lift Request.

Logical attributes: Quote Identifier; Quote Number; Quote Status; Issued Date; Expiration Date; Customer; Request; Currency; Estimated Total; Prepared By; Assumptions; Exclusions.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#quote) | Quote |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](../lift-request/lift-request.md) | produces | [Quote](quote.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Quote](quote.md) | contains | [Quote Line](quote-line.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
