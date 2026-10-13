---
type: entity
title: "Order"
---

# Order

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Also known as: Order (E-Commerce), Product Order (Telecommunications).

## Definition and detail

An authorized request to supply Products or Services under commercial or operational terms.

Logical attributes: Order Identifier; Order Number; Order Type; Order Status; Order Date; Required Date; Currency; Total Amount.

### In industries

- **Order** (E-Commerce): The Merchant's accepted commercial record of a Customer request. Attributes: Order Identifier; Order Number; Order Type; Order Status; Order Date; Currency; Subtotal; Discount Total; Tax Total; Shipping Total; Grand Total; Customer reference; Buyer reference.
- **Product Order** (Telecommunications): A Customer-facing request to add, change, move, suspend, resume, migrate, or terminate products. Attributes: Product Order Identifier; Order Number; Order Type; Order Status; Requested Date; Requested Completion; Customer Account; Agreement; Channel; Priority.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#order) | Order |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#order) | Order |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#product-order) | Product Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Request](../request/request.md) | may become | Order | 1:0..1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Order | contains | [Order Line](order-line.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Cart](cart.md) | converts to | Order | 1:0..1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Customer (review) | places | Order | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order | contains | [Order Line](order-line.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order | uses | [Order Address](../../../../industry-patterns/e-commerce.md#concepts-applications-typically-add) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order | receives | [Payment Authorization](../../finance/payment/payment-authorization.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order | releases | [Fulfillment Order](../../fulfillment/fulfillment/fulfillment-order.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order | receives | [Return](../../fulfillment/return/return.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Product Order | contains | [Product Order Item](order-line.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
