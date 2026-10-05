---
type: entity
title: "Quote Line"
---

# Quote Line

Domain: [Crane Rental](../README.md). ABE: [Rental Offering](README.md).

## Definition and detail

A proposed equipment, labor, transport, accessory, permit, planning, or other charge.

Logical attributes: Quote Line Identifier; Line Type; Description; Quantity; Unit; Rate; Amount; Rate Card Reference; Tax Treatment; Optional Indicator.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#quote-line) | Quote Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Quote](quote.md) | contains | [Quote Line](quote-line.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
