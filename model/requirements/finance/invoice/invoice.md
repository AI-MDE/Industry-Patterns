---
type: primary-entity
title: "Invoice"
---

# Invoice

Domain: [Finance](../README.md). ABE: [Invoice](README.md).

## Definition and detail

A document requesting settlement of one or more Charges.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Invoice Status; Subtotal; Tax Amount; Total Amount; Currency.

## Crane Rental context

A request for payment under an Agreement for one or more approved Charge Events.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Invoice Status; Customer; Agreement; Currency; Subtotal; Tax; Total.

## Insurance context

A request for payment of premium, tax, fees, or adjustments.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Invoice Status; Total Amount; Currency.

## Professional Services context

Billing document sent to a Client.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Invoice Status; Invoice Total Amount; Due Date.

## Telecommunications context

A request for payment grouping approved Charges.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Billing Account; Invoice Status; Currency; Previous Balance; New Charges; Tax; Total Due.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#invoice) | Invoice |
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#invoice) | Invoice |
| [patterns/insurance.md](../../../../patterns/insurance.md#invoice) | Invoice |
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Invoice |
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#invoice) | Invoice |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Invoice](invoice.md) | receives | [Payment](payment.md) | M:M through allocation | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Client](../../professional-services/project/client.md) | receives | [Invoice](invoice.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Project](../../professional-services/project/project.md) | is billed by | [Invoice](invoice.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Invoice](invoice.md) | contains | [Invoice Line](invoice-line.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Invoice](invoice.md) | is settled by | [Payment](payment.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
