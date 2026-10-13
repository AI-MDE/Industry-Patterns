---
type: entity
title: "Invoice Line"
---

# Invoice Line

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

## Definition and detail

An explainable component of an Invoice linked to its source Charge or business event.

Logical attributes: Invoice Line Identifier; Line Number; Description; Quantity; Unit Price; Line Amount; Tax Amount.

## Crane Rental context

A billed line tracing to one or more Charge Events.

Logical attributes: Invoice Line Identifier; Line Number; Charge Type; Description; Quantity; Unit; Rate; Amount; Tax; Source Reference.

## Professional Services context

One explainable component of an Invoice.

Logical attributes: Invoice Line Identifier; Line Number; Description; Quantity; Unit Rate; Line Amount; Line Type.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#invoice-line) | Invoice Line |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#invoice-line) | Invoice Line |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Invoice Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Invoice](invoice.md) | contains | Invoice Line | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Invoice Line | derives from | [Charge Event](charge.md) | M:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Invoice](invoice.md) | contains | Invoice Line | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Invoice Line | explains | [Charge](charge.md) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Invoice](invoice.md) | contains | Invoice Line | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |

## Integrity rules

- Every Invoice Line must have an explainable source.
