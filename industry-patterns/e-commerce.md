# E-Commerce Model Pattern

## Intent

Model businesses that present products or services through digital catalogs, accept customer orders, collect payment, fulfill goods or services, and manage cancellations, returns, refunds, and customer service.

This pattern specializes the Cross-Industry Party, Product, Offering, Agreement, Order, Fulfillment, Invoice, Payment, Classification, Status, Event, and Measurement concepts.

## Business overview

**Customer → Catalog/Offering → Cart → Order → Payment → Fulfillment → Delivery → Return/Refund**

A Merchant publishes Offerings through one or more Catalogs and Channels. A Customer selects an Offering and builds a Cart. Checkout converts the Cart into an Order with immutable commercial terms. Payment is authorized or collected. Order Lines are allocated to fulfillment sources and satisfied through Shipments, pickup, digital delivery, or service activation. Exceptions may cause cancellation, return, replacement, or refund.

## Pattern variants

### Simple

Use for a single merchant, one storefront, simple pricing, and direct fulfillment.

Core concepts: Customer; Product; Offering; Cart; Cart Line; Order; Order Line; Payment; Shipment.

### Standard

Use as the default for production commerce.

Adds: Merchant; Channel; Catalog; Category; Product Variant; Price; Inventory Item; Inventory Reservation; Address; Promotion; Tax; Payment Authorization; Fulfillment Order; Shipment Item; Delivery; Cancellation; Return; Return Line; Refund.

### Enterprise

Use for marketplaces, multiple sellers or legal entities, multiple fulfillment nodes, complex pricing, subscriptions, cross-border commerce, or omnichannel operations.

Adds: Seller; Marketplace Listing; Seller Offer; Price List; Contract Price; Warehouse/Fulfillment Location; Sourcing Rule; Fulfillment Split; Package; Carrier Service; Subscription; Digital Entitlement; Fraud Assessment; Dispute; Settlement; Commission; Payout; Currency Conversion; Trade Compliance.

## Actors and roles

See [canonical actors and roles](behavior/e-commerce.md#actors-and-roles).

## Catalog and merchandising concepts

### Channel

Canonical concept: [Channel](../model/subjects/product/offering/channel.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Catalog

Canonical concept: [Catalog](../model/subjects/product/offering/catalog.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Category

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product

Canonical concept: [Product](../model/subjects/product/product/product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Variant

Canonical concept: [Product Variant](../model/subjects/product/product/product-variant.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Offering

Canonical concept: [Offering](../model/subjects/product/offering/offering.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Price

Canonical concept: [Price](../model/subjects/product/offering/price.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Promotion

Canonical concept: [Promotion](../model/subjects/product/offering/promotion.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Shopping concepts

### Shopping Session

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cart

Canonical concept: [Cart](../model/subjects/request/order/cart.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cart Line

Canonical concept: [Cart Line](../model/subjects/request/order/cart-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Saved List

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Order concepts

### Order

Canonical concept: [Order](../model/subjects/request/order/order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Line

Canonical concept: [Order Line](../model/subjects/request/order/order-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Adjustment

Canonical concept: [Adjustment](../model/subjects/finance/invoice/adjustment.md) (as Order Adjustment).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Address

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Inventory and availability

### Inventory Item

Canonical concept: [Inventory Item](../model/subjects/resource/inventory-item/inventory-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inventory Reservation

Canonical concept: [Reservation](../model/subjects/scheduling/reservation/reservation.md) (as Inventory Reservation).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Availability Promise

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Payment concepts

### Payment Method

Canonical concept: [Payment Method](../model/subjects/finance/payment/payment-method.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Authorization

Canonical concept: [Payment Authorization](../model/subjects/finance/payment/payment-authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Allocation

Canonical concept: [Payment Allocation](../model/subjects/finance/payment/payment-allocation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Refund

Canonical concept: [Refund](../model/subjects/finance/payment/refund.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Fulfillment concepts

### Fulfillment Order

Canonical concept: [Fulfillment Order](../model/subjects/fulfillment/fulfillment/fulfillment-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fulfillment Line

Canonical concept: [Fulfillment Line](../model/subjects/fulfillment/fulfillment/fulfillment-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Shipment

Canonical concept: [Shipment](../model/subjects/fulfillment/fulfillment/shipment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Shipment Item

Canonical concept: [Shipment Item](../model/subjects/fulfillment/fulfillment/shipment-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Package

Canonical concept: [Package](../model/subjects/fulfillment/fulfillment/package.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Delivery

Canonical concept: [Delivery](../model/subjects/fulfillment/fulfillment/delivery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Digital Entitlement

Canonical concept: [Digital Entitlement](../model/subjects/agreement/agreement/digital-entitlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Cancellation, return, and after-sale concepts

### Cancellation

Canonical concept: [Cancellation](../model/subjects/request/order/cancellation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Return

Canonical concept: [Return](../model/subjects/fulfillment/return/return.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Return Line

Canonical concept: [Return Line](../model/subjects/fulfillment/return/return-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Disposition

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Customer Case

Canonical concept: [Case](../model/subjects/case/case/case.md) (as Customer Case).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Standard relationship model

See [canonical standard relationship model](behavior/e-commerce.md#standard-relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/e-commerce.md#lifecycle-models).

## Business events

See [canonical business events](behavior/e-commerce.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/e-commerce.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Is this single-merchant commerce or a multi-seller marketplace?
2. Are Customers people, organizations, or both?
3. Are Products physical goods, digital goods, subscriptions, services, or bundles?
4. Do Product and SKU/Product Variant need to be distinct?
5. Which Channels, markets, languages, and currencies are supported?
6. Are prices global, channel-specific, customer-specific, quantity-based, or contract-based?
7. How are promotions qualified, combined, prioritized, and limited?
8. Is inventory tracked, and at which locations and units?
9. Are backorders, preorders, reservations, or substitutions permitted?
10. Which fulfillment methods exist: shipment, pickup, digital delivery, activation, or service?
11. Can one Order split across sellers, locations, shipments, or delivery dates?
12. When is payment authorized and captured?
13. Are partial payment, multiple tenders, invoicing, or payment-on-delivery allowed?
14. What cancellation, return, exchange, and refund policies apply?
15. Which taxes, duties, trade restrictions, privacy requirements, and jurisdictions apply?
16. Which events and measures must be retained for audit and analytics?

## MDE modeling guidance

- Use the Cross-Industry Party and Party Role pattern; do not equate Customer with login identity.
- Treat Catalog data as current merchandising knowledge and Order Lines as historical commercial evidence.
- Keep Product, Product Variant, Offering, and Price separate whenever they change independently.
- Keep Order, Payment, and Fulfillment as separate lifecycles; do not overload Order Status with every downstream condition.
- Model splits explicitly through Fulfillment Lines, Shipment Items, Payment Allocations, and Return Lines.
- Put calculation and eligibility rules on the operations they govern; use cases orchestrate choices and outcomes.
- Add marketplace Seller, Commission, Settlement, and Payout only when multiple commercial principals exist.

## Anti-patterns

### Product Equals SKU Equals Offering

This prevents several variants, channels, markets, prices, or availability windows from representing the same product cleanly.

### Cart as the Order

A Cart is mutable and estimated; an accepted Order is durable commercial evidence.

### One Order, One Shipment, One Payment

This fails under partial shipment, split fulfillment, backorders, partial capture, multiple tenders, and refunds.

### Order Status as Everything

Payment, fulfillment, shipment, return, and refund each need their own lifecycle and evidence.

### Current Catalog Reconstructs History

Catalog descriptions and prices change. Historical Orders require accepted snapshots and traceable adjustments.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Product Variant | `product_variant` |
| Offering | `offering` |
| Cart Line | `cart_line` |
| Order Line | `order_line` |
| Inventory Reservation | `inventory_reservation` |
| Payment Authorization | `payment_authorization` |
| Fulfillment Order | `fulfillment_order` |
| Fulfillment Line | `fulfillment_line` |
| Shipment Item | `shipment_item` |
| Return Line | `return_line` |

Logical names remain authoritative; stack rules generate physical naming after logical acceptance.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the canonical domain with capabilities and actor-goal use cases such as Browse Catalog, Maintain Cart, Checkout, Place Order, Authorize Payment, Fulfill Order, Track Delivery, Cancel Order, Return Item, and Issue Refund, together with reusable rules and business scenarios.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Channel | [Channel](../model/subjects/product/offering/channel.md) | [Channel](../model/subjects/product/offering/README.md) |
| Catalog | [Catalog](../model/subjects/product/offering/catalog.md) | [Channel](../model/subjects/product/offering/README.md) |
| Category | [Category](#concepts-applications-typically-add) | [Channel](../model/subjects/product/offering/README.md) |
| Product | [Product](../model/subjects/product/product/product.md) | [Channel](../model/subjects/product/offering/README.md) |
| Product Variant | [Product Variant](../model/subjects/product/product/product-variant.md) | [Channel](../model/subjects/product/offering/README.md) |
| Offering | [Offering](../model/subjects/product/offering/offering.md) | [Channel](../model/subjects/product/offering/README.md) |
| Price | [Price](../model/subjects/product/offering/price.md) | [Product](../model/subjects/product/product/README.md) |
| Promotion | [Promotion](../model/subjects/product/offering/promotion.md) | [Channel](../model/subjects/product/offering/README.md) |
| Shopping Session | [Shopping Session](#concepts-applications-typically-add) | [Shopping Session](#) |
| Cart | [Cart](../model/subjects/request/order/cart.md) | [Shopping Session](#) |
| Cart Line | [Cart Line](../model/subjects/request/order/cart-line.md) | [Shopping Session](#) |
| Saved List | [Saved List](#concepts-applications-typically-add) | [Shopping Session](#) |
| Order | [Order](../model/subjects/request/order/order.md) | [Order](../model/subjects/request/order/README.md) |
| Order Line | [Order Line](../model/subjects/request/order/order-line.md) | [Order](../model/subjects/request/order/README.md) |
| Order Adjustment | [Order Adjustment](../model/subjects/finance/invoice/adjustment.md) | [Order](../model/subjects/request/order/README.md) |
| Order Address | [Order Address](#concepts-applications-typically-add) | [Order](../model/subjects/request/order/README.md) |
| Inventory Item | [Inventory Item](../model/subjects/resource/inventory-item/inventory-item.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Inventory Reservation | [Inventory Reservation](../model/subjects/scheduling/reservation/reservation.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Availability Promise | [Availability Promise](#concepts-applications-typically-add) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Payment Method | [Payment Method](../model/subjects/finance/payment/payment-method.md) | [Payment Method](../model/subjects/finance/payment/README.md) |
| Payment Authorization | [Payment Authorization](../model/subjects/finance/payment/payment-authorization.md) | [Payment Method](../model/subjects/finance/payment/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Payment Allocation | [Payment Allocation](../model/subjects/finance/payment/payment-allocation.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Refund | [Refund](../model/subjects/finance/payment/refund.md) | [Payment Method](../model/subjects/finance/payment/README.md) |
| Fulfillment Order | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/fulfillment-order.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Fulfillment Line | [Fulfillment Line](../model/subjects/fulfillment/fulfillment/fulfillment-line.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Shipment | [Shipment](../model/subjects/fulfillment/fulfillment/shipment.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Shipment Item | [Shipment Item](../model/subjects/fulfillment/fulfillment/shipment-item.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Package | [Package](../model/subjects/fulfillment/fulfillment/package.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Delivery | [Delivery](../model/subjects/fulfillment/fulfillment/delivery.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Digital Entitlement | [Digital Entitlement](../model/subjects/agreement/agreement/digital-entitlement.md) | [Fulfillment Order](../model/subjects/fulfillment/fulfillment/README.md) |
| Cancellation | [Cancellation](../model/subjects/request/order/cancellation.md) | [Cancellation](../model/subjects/request/order/README.md) |
| Return | [Return](../model/subjects/fulfillment/return/return.md) | [Cancellation](../model/subjects/request/order/README.md) |
| Return Line | [Return Line](../model/subjects/fulfillment/return/return-line.md) | [Cancellation](../model/subjects/request/order/README.md) |
| Disposition | [Disposition](#concepts-applications-typically-add) | [Cancellation](../model/subjects/request/order/README.md) |
| Customer Case | [Customer Case](../model/subjects/case/case/case.md) | [Cancellation](../model/subjects/request/order/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Category**: A navigational or merchandising classification used within a Catalog.
- **Shopping Session**: A period of customer interaction that provides context for browsing and shopping.
- **Saved List**: A named collection of Products or Offerings retained for later consideration.
- **Order Address**: An immutable address snapshot used for billing, shipping, pickup, or service delivery.
- **Availability Promise**: A calculated promise that a quantity can be delivered or made available by a stated date.
- **Disposition**: Decision about a returned item.
