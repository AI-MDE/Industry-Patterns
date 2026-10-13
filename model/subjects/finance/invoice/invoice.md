---
type: entity
title: "Invoice"
---

# Invoice

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

Also known as: Patient Invoice (Physical Therapy).

## Definition and detail

A document requesting settlement of one or more Charges.

Logical attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Invoice Status; Subtotal; Tax Amount; Total Amount; Currency.

### In industries

- **Patient Invoice** (Physical Therapy): A request for payment of Patient or guarantor responsibility. Attributes: Invoice Identifier; Invoice Number; Invoice Date; Due Date; Invoice Status; Patient or Guarantor; Amount; Currency; Source Charges.

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
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#invoice) | Invoice |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#invoice) | Invoice |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#invoice) | Invoice |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Invoice |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#invoice) | Invoice |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#patient-invoice) | Patient Invoice |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Invoice | contains | [Invoice Line](invoice-line.md) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Invoice | receives | [Payment](../payment/payment.md) | M:M through allocation | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Invoice | contains | [Invoice Line](invoice-line.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Client](../../party/party/customer.md) | receives | Invoice | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Project](../../work/project/project.md) | is billed by | Invoice | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Invoice | contains | [Invoice Line](invoice-line.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Invoice | is settled by | [Payment](../payment/payment.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
