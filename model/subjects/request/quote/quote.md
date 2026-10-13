---
type: entity
title: "Quote"
---

# Quote

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Quote](README.md).

Also known as: Service Estimate (Service Management), Quote (Crane Rental), Quote (Insurance), Telecommunications Quote (Telecommunications).

## Definition and detail

A versioned pre-work proposal describing service scope, price, assumptions, validity and customer acceptance. Distinct from Invoice, Work Order, and regulated insurance Quote.

### In industries

- **Quote** (Crane Rental): A time-bounded commercial proposal responding to a Lift Request. Attributes: Quote Identifier; Quote Number; Quote Status; Issued Date; Expiration Date; Customer; Request; Currency; Estimated Total; Prepared By; Assumptions; Exclusions.
- **Quote** (Insurance): A time-bounded proposed combination of Coverages, terms, premium, conditions, and assumptions. Attributes: Quote Identifier; Quote Number; Quote Status; Requested Date; Quoted Date; Expiration Date; Currency; Total Premium; Producer; Product Version.
- **Telecommunications Quote** (Telecommunications): A time-bounded proposal of products, services, installation, recurring charges, usage rates, commitments, and assumptions. Attributes: Quote Identifier; Quote Number; Quote Status; Issued Date; Expiration Date; Customer; Currency; Total One-Time Charge; Estimated Recurring Charge.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#quote) | Quote |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#quote) | Quote |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#telecommunications-quote) | Telecommunications Quote |

## Relationships

- Reuses canonical Party, Agreement, Service Request, Work Effort, Scheduling, and Finance concepts where applicable.
- Has zero or more associated records or references; the application must confirm cardinalities and ownership.

## Rules

Maintain immutable history when an accepted commercial offer, site assessment or service definition is revised. Do not equate planned work with executed work.
