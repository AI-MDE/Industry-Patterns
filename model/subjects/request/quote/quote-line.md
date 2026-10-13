---
type: entity
title: "Quote Line"
---

# Quote Line

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Quote](README.md).

Also known as: Estimate Line (Service Management), Quote Line (Crane Rental).

## Definition and detail

A priced estimate component describing labor, material, equipment, travel or fixed-fee work.

### In industries

- **Quote Line** (Crane Rental): A proposed equipment, labor, transport, accessory, permit, planning, or other charge. Attributes: Quote Line Identifier; Line Type; Description; Quantity; Unit; Rate; Amount; Rate Card Reference; Tax Treatment; Optional Indicator.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#quote-line) | Quote Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Quote](quote.md) | contains | Quote Line | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |

## Relationships and rules

- Belongs to or references a Service Estimate.
- Preserve the original record when accepted or consumed; distinguish planned, actual and financial quantities.
