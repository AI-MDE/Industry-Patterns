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

See [canonical actors and roles](../model/domains/e-commerce/behavior.md#actors-and-roles).

## Catalog and merchandising concepts

### Channel

Canonical concept: [Channel](../model/domains/e-commerce/channel/channel.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Catalog

Canonical concept: [Catalog](../model/domains/e-commerce/channel/catalog.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Category

Canonical concept: [Category](../model/domains/e-commerce/channel/category.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product

Canonical concept: [Product](../model/domains/e-commerce/channel/product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Variant

Canonical concept: [Product Variant](../model/domains/e-commerce/channel/product-variant.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Offering

Canonical concept: [Offering](../model/domains/e-commerce/channel/offering.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Price

Canonical concept: [Price](../model/domains/product-and-service/product/price.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Promotion

Canonical concept: [Promotion](../model/domains/e-commerce/channel/promotion.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Shopping concepts

### Shopping Session

Canonical concept: [Shopping Session](../model/domains/e-commerce/shopping-session/shopping-session.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cart

Canonical concept: [Cart](../model/domains/e-commerce/shopping-session/cart.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cart Line

Canonical concept: [Cart Line](../model/domains/e-commerce/shopping-session/cart-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Saved List

Canonical concept: [Saved List](../model/domains/e-commerce/shopping-session/saved-list.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Order concepts

### Order

Canonical concept: [Order](../model/domains/e-commerce/order/order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Line

Canonical concept: [Order Line](../model/domains/e-commerce/order/order-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Adjustment

Canonical concept: [Order Adjustment](../model/domains/e-commerce/order/order-adjustment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Address

Canonical concept: [Order Address](../model/domains/e-commerce/order/order-address.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Inventory and availability

### Inventory Item

Canonical concept: [Inventory Item](../model/domains/e-commerce/inventory-item/inventory-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inventory Reservation

Canonical concept: [Inventory Reservation](../model/domains/e-commerce/inventory-item/inventory-reservation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Availability Promise

Canonical concept: [Availability Promise](../model/domains/e-commerce/inventory-item/availability-promise.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Payment concepts

### Payment Method

Canonical concept: [Payment Method](../model/domains/e-commerce/payment-method/payment-method.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Authorization

Canonical concept: [Payment Authorization](../model/domains/e-commerce/payment-method/payment-authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/domains/finance/invoice/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Allocation

Canonical concept: [Payment Allocation](../model/domains/finance/invoice/payment-allocation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Refund

Canonical concept: [Refund](../model/domains/e-commerce/payment-method/refund.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Fulfillment concepts

### Fulfillment Order

Canonical concept: [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/fulfillment-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fulfillment Line

Canonical concept: [Fulfillment Line](../model/domains/e-commerce/fulfillment-order/fulfillment-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Shipment

Canonical concept: [Shipment](../model/domains/e-commerce/fulfillment-order/shipment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Shipment Item

Canonical concept: [Shipment Item](../model/domains/e-commerce/fulfillment-order/shipment-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Package

Canonical concept: [Package](../model/domains/e-commerce/fulfillment-order/package.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Delivery

Canonical concept: [Delivery](../model/domains/e-commerce/fulfillment-order/delivery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Digital Entitlement

Canonical concept: [Digital Entitlement](../model/domains/e-commerce/fulfillment-order/digital-entitlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Cancellation, return, and after-sale concepts

### Cancellation

Canonical concept: [Cancellation](../model/domains/e-commerce/cancellation/cancellation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Return

Canonical concept: [Return](../model/domains/e-commerce/cancellation/return.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Return Line

Canonical concept: [Return Line](../model/domains/e-commerce/cancellation/return-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Disposition

Canonical concept: [Disposition](../model/domains/e-commerce/cancellation/disposition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Customer Case

Canonical concept: [Customer Case](../model/domains/e-commerce/cancellation/customer-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Standard relationship model

See [canonical standard relationship model](../model/domains/e-commerce/behavior.md#standard-relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/e-commerce/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/e-commerce/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/e-commerce/behavior.md#baseline-business-and-integrity-rules).

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
| Channel | [Channel](../model/domains/e-commerce/channel/channel.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Catalog | [Catalog](../model/domains/e-commerce/channel/catalog.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Category | [Category](../model/domains/e-commerce/channel/category.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Product | [Product](../model/domains/e-commerce/channel/product.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Product Variant | [Product Variant](../model/domains/e-commerce/channel/product-variant.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Offering | [Offering](../model/domains/e-commerce/channel/offering.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Price | [Price](../model/domains/product-and-service/product/price.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Promotion | [Promotion](../model/domains/e-commerce/channel/promotion.md) | [Channel](../model/domains/e-commerce/channel/README.md) |
| Shopping Session | [Shopping Session](../model/domains/e-commerce/shopping-session/shopping-session.md) | [Shopping Session](../model/domains/e-commerce/shopping-session/README.md) |
| Cart | [Cart](../model/domains/e-commerce/shopping-session/cart.md) | [Shopping Session](../model/domains/e-commerce/shopping-session/README.md) |
| Cart Line | [Cart Line](../model/domains/e-commerce/shopping-session/cart-line.md) | [Shopping Session](../model/domains/e-commerce/shopping-session/README.md) |
| Saved List | [Saved List](../model/domains/e-commerce/shopping-session/saved-list.md) | [Shopping Session](../model/domains/e-commerce/shopping-session/README.md) |
| Order | [Order](../model/domains/e-commerce/order/order.md) | [Order](../model/domains/e-commerce/order/README.md) |
| Order Line | [Order Line](../model/domains/e-commerce/order/order-line.md) | [Order](../model/domains/e-commerce/order/README.md) |
| Order Adjustment | [Order Adjustment](../model/domains/e-commerce/order/order-adjustment.md) | [Order](../model/domains/e-commerce/order/README.md) |
| Order Address | [Order Address](../model/domains/e-commerce/order/order-address.md) | [Order](../model/domains/e-commerce/order/README.md) |
| Inventory Item | [Inventory Item](../model/domains/e-commerce/inventory-item/inventory-item.md) | [Inventory Item](../model/domains/e-commerce/inventory-item/README.md) |
| Inventory Reservation | [Inventory Reservation](../model/domains/e-commerce/inventory-item/inventory-reservation.md) | [Inventory Item](../model/domains/e-commerce/inventory-item/README.md) |
| Availability Promise | [Availability Promise](../model/domains/e-commerce/inventory-item/availability-promise.md) | [Inventory Item](../model/domains/e-commerce/inventory-item/README.md) |
| Payment Method | [Payment Method](../model/domains/e-commerce/payment-method/payment-method.md) | [Payment Method](../model/domains/e-commerce/payment-method/README.md) |
| Payment Authorization | [Payment Authorization](../model/domains/e-commerce/payment-method/payment-authorization.md) | [Payment Method](../model/domains/e-commerce/payment-method/README.md) |
| Payment | [Payment](../model/domains/finance/invoice/payment.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Payment Allocation | [Payment Allocation](../model/domains/finance/invoice/payment-allocation.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Refund | [Refund](../model/domains/e-commerce/payment-method/refund.md) | [Payment Method](../model/domains/e-commerce/payment-method/README.md) |
| Fulfillment Order | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/fulfillment-order.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Fulfillment Line | [Fulfillment Line](../model/domains/e-commerce/fulfillment-order/fulfillment-line.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Shipment | [Shipment](../model/domains/e-commerce/fulfillment-order/shipment.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Shipment Item | [Shipment Item](../model/domains/e-commerce/fulfillment-order/shipment-item.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Package | [Package](../model/domains/e-commerce/fulfillment-order/package.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Delivery | [Delivery](../model/domains/e-commerce/fulfillment-order/delivery.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Digital Entitlement | [Digital Entitlement](../model/domains/e-commerce/fulfillment-order/digital-entitlement.md) | [Fulfillment Order](../model/domains/e-commerce/fulfillment-order/README.md) |
| Cancellation | [Cancellation](../model/domains/e-commerce/cancellation/cancellation.md) | [Cancellation](../model/domains/e-commerce/cancellation/README.md) |
| Return | [Return](../model/domains/e-commerce/cancellation/return.md) | [Cancellation](../model/domains/e-commerce/cancellation/README.md) |
| Return Line | [Return Line](../model/domains/e-commerce/cancellation/return-line.md) | [Cancellation](../model/domains/e-commerce/cancellation/README.md) |
| Disposition | [Disposition](../model/domains/e-commerce/cancellation/disposition.md) | [Cancellation](../model/domains/e-commerce/cancellation/README.md) |
| Customer Case | [Customer Case](../model/domains/e-commerce/cancellation/customer-case.md) | [Cancellation](../model/domains/e-commerce/cancellation/README.md) |
