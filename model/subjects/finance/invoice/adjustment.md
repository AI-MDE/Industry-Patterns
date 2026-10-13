---
type: entity
title: "Adjustment"
---

# Adjustment

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

Also known as: Order Adjustment (E-Commerce), Adjustment (Financial Services), Payment and Adjustment (Telecommunications).

## Definition and detail

A discount, surcharge, credit, fee, tax, or manual correction applied to an Order or Order Line.

Logical attributes: Adjustment Identifier; Adjustment Type; Description; Amount; Tax Included Indicator; Source reference.

### In industries

- **Adjustment** (Financial Services): An authorized correction or compensating Transaction that preserves the original record. Attributes: Adjustment Identifier; Adjustment Type; Status; Requested Date; Approved Date; Amount; Currency; Reason; Original Transaction; Resulting Transaction.
- **Payment and Adjustment** (Telecommunications): A financial settlement or correction applied to a Billing Account or Invoice. Attributes: Transaction Identifier; Transaction Type; Status; Effective Date; Amount; Currency; Reason; Source Invoice; Allocation.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#order-adjustment) | Order Adjustment |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#adjustment) | Adjustment |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#payment-and-adjustment) | Payment and Adjustment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Dispute](../../case/case/dispute.md) | may produce | Adjustment | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
