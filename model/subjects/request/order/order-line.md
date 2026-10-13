---
type: entity
title: "Order Line"
---

# Order Line

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Order](README.md).

Also known as: Order Line (E-Commerce), Product Order Item (Telecommunications).

## Definition and detail

One requested Product, Service, or chargeable unit within an Order.

Logical attributes: Order Line Identifier; Line Number; Quantity; Unit of Measure; Unit Price; Line Amount; Line Status.

### In industries

- **Order Line** (E-Commerce): An immutable commercial record of one ordered Offering. Attributes: Order Line Identifier; Line Number; Product Name Snapshot; SKU Snapshot; Quantity Ordered; Unit Price; Discount Amount; Tax Amount; Line Total; Line Status; Requested Fulfillment Method.
- **Product Order Item** (Telecommunications): An order line concerning a Product Offering or Subscription action. Attributes: Order Item Identifier; Action; Status; Offering; Quantity; Subscription; Requested Start; Requested Characteristics; Parent Item.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#order-line) | Order Line |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#order-line) | Order Line |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#product-order-item) | Product Order Item |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Order](order.md) | contains | Order Line | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Order Line | requests | [Offering](../../product/offering/offering.md) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Order](order.md) | contains | Order Line | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order Line | snapshots | [Offering](../../product/offering/offering.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Order Line | receives | [Inventory Reservation](../../scheduling/reservation/reservation.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Fulfillment Line](../../fulfillment/fulfillment/fulfillment-line.md) | satisfies | Order Line | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Return Line](../../fulfillment/return/return-line.md) | refers to | Order Line | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Product Order](order.md) | contains | Product Order Item | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Product Order Item | decomposes into | [Service Order Item](../../network/service-order/service-order-item.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |

## Integrity rules

- An Order Line must identify what is requested and its quantity or scope.
