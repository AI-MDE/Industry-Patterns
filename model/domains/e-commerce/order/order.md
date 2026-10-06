---
type: primary-entity
title: "Order"
---

# Order

Domain: [E-Commerce](../README.md). ABE: [Order](README.md).

Specializes: [Order](../../request-and-fulfillment/request/order.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The Merchant's accepted commercial record of a Customer request.

Logical attributes: Order Identifier; Order Number; Order Type; Order Status; Order Date; Currency; Subtotal; Discount Total; Tax Total; Shipping Total; Grand Total; Customer reference; Buyer reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/e-commerce.md](../../../../patterns/e-commerce.md#order) | Order |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Cart](../shopping-session/cart.md) | converts to | [Order](order.md) | 1:0..1 | [e-commerce](../../../../patterns/e-commerce.md) |
| Customer (review) | places | [Order](order.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order](order.md) | contains | [Order Line](order-line.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order](order.md) | uses | [Order Address](order-address.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order](order.md) | receives | [Payment Authorization](../payment-method/payment-authorization.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order](order.md) | releases | [Fulfillment Order](../fulfillment-order/fulfillment-order.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
| [Order](order.md) | receives | [Return](../cancellation/return.md) | 1:M | [e-commerce](../../../../patterns/e-commerce.md) |
