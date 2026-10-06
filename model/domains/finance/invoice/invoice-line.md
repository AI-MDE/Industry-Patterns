---
type: entity
title: "Invoice Line"
---

# Invoice Line

Domain: [Finance](../README.md). ABE: [Invoice](README.md).

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
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#invoice-line) | Invoice Line |
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#invoice-line) | Invoice Line |
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Invoice Line |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Invoice Line](invoice-line.md) | derives from | [Charge Event](../../crane-rental/charge-event/charge-event.md) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Invoice Line](invoice-line.md) | explains | [Charge](charge.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
