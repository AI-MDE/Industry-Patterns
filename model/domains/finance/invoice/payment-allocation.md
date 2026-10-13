---
type: entity
title: "Payment Allocation"
---

# Payment Allocation

Domain: [Finance](../README.md). ABE: [Invoice](README.md).

## Definition and detail

Application of some or all of a Payment to an Invoice or Charge.

Logical attributes: Allocation Identifier; Allocated Amount; Allocation Date; Allocation Status.

Rule: keep Payment separate from its allocation so one payment may settle several invoices and one invoice may receive several payments.

## E-Commerce context

Application of a Payment to an Order, Invoice, or Charge.

Logical attributes: Allocation Identifier; Allocated Amount; Allocation Date; Allocation Status.

## Travel context

Application of a Payment to Booking Items, invoices, fees, or change collections.

Logical attributes: Allocation Identifier; Allocation Type; Allocated Amount; Allocation Date; Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#payment-allocation) | Payment Allocation |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#payment-allocation) | Payment Allocation |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#payment-allocation) | Payment Allocation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Payment](payment.md) | applies through | [Payment Allocation](payment-allocation.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Payment Allocation](payment-allocation.md) | settles | Invoice or Charge (review) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Payment](payment.md) | applies through | [Payment Allocation](payment-allocation.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Payment Allocation](payment-allocation.md) | settles | Order, Invoice, or Charge (review) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |

## Integrity rules

- Payment Allocations cannot exceed the Payment amount.
