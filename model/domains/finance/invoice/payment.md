---
type: entity
title: "Payment"
---

# Payment

Domain: [Finance](../README.md). ABE: [Invoice](README.md).

## Definition and detail

A transfer of value intended to settle an Invoice, Charge, Account, or obligation.

Logical attributes: Payment Identifier; Payment Date; Payment Amount; Currency; Payment Method; Payment Status; Payment Reference.

## Crane Rental context

Funds received and allocated to Invoices or other obligations.

Logical attributes: Payment Identifier; Payment Date; Amount; Currency; Method; Status; Customer; Reference; Allocation.

## E-Commerce context

A captured or received transfer of value.

Logical attributes: Payment Identifier; Provider Reference; Payment Date; Amount; Currency; Payment Method Type; Payment Status.

## Health Care context

A transfer of funds settling an adjudicated Claim, Invoice, or Patient balance.

Logical attributes: Payment Identifier; Payment Date; Payment Amount; Currency; Payment Type; Payment Status; Remittance Reference.

## Insurance context

Money received and allocated to one or more insurance obligations.

Logical attributes: Payment Identifier; Payment Date; Amount; Currency; Method; Payment Status; Reference.

## Physical Therapy context

A transfer of funds settling a Claim, Invoice, or Patient balance.

Logical attributes: Payment Identifier; Payment Date; Amount; Currency; Payment Type; Payment Status; Payer or Patient; Allocation Reference.

## Professional Services context

Money received against an Invoice.

Logical attributes: Payment Identifier; Payment Date; Payment Amount; Payment Method; Payment Status; Payment Reference.

## Travel context

A captured or received transfer of value.

Logical attributes: Payment Identifier; Payment Date; Amount; Currency; Method; Payment Status; Provider Reference; Payer.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#payment) | Payment |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#payment) | Payment |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#payment) | Payment |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#payment) | Payment |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#payment) | Payment |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#payment) | Payment |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Payment |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#payment) | Payment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Invoice](invoice.md) | receives | [Payment](payment.md) | M:M through allocation | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Payment](payment.md) | applies through | [Payment Allocation](payment-allocation.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Payment Authorization](../../e-commerce/payment-method/payment-authorization.md) | may produce | [Payment](payment.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Payment](payment.md) | applies through | [Payment Allocation](payment-allocation.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Adjudication](../../health-care/coverage/adjudication.md) | may produce | [Payment](payment.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Adjudication or Invoice (review) | receives | [Payment](payment.md) | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Invoice](invoice.md) | is settled by | [Payment](payment.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Booking](../../travel/reservation/booking.md) | receives | [Payment](payment.md) | M:M through Payment Allocation | [travel](../../../../industry-patterns/travel.md) |
