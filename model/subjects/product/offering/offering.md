---
type: entity
title: "Offering"
---

# Offering

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

Also known as: Offering (E-Commerce), Financial Offering (Financial Services), Insurance Offering (Insurance), Service Offering (Professional Services), Product Offering (Telecommunications), Travel Offer (Travel).

## Definition and detail

A market- or context-specific way a Product or Service is made available.

Logical attributes: Offering Identifier; Offering Name; Offering Status; Available From; Available Through; Market; Channel.

### In industries

- **Offering** (E-Commerce): A Product or Product Variant made available through a Channel under specified commercial conditions. Attributes: Offering Identifier; Offering Name; Offering Status; Available From; Available Through; Minimum Quantity; Maximum Quantity; Market; Channel reference.
- **Financial Offering** (Financial Services): A Product Version made available through a channel, market, region, or customer segment under stated commercial conditions. Attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Customer Segment; Available From; Available Through.
- **Insurance Offering** (Insurance): A Product Version made available through a Channel, Producer, market, or customer segment under stated eligibility and commercial conditions. Attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Customer Segment; Available From; Available Through.
- **Service Offering** (Professional Services): professional service sold through an Engagement and delivered through a Project.
- **Product Offering** (Telecommunications): A Product Version made available through a channel, market, geography, or customer segment at defined prices and terms. Attributes: Offering Identifier; Offering Name; Offering Status; Channel; Market; Geography; Available From; Available Through; Price Plan.
- **Travel Offer** (Travel): A time-bounded commercial proposal for one or more travel services. Attributes: Offer Identifier; Offer Status; Created At; Expires At; Currency; Total Price; Channel; Supplier; Customer Segment; Offer Source.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#offering) | Offering |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#offering) | Offering |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#financial-offering) | Financial Offering |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#insurance-offering) | Insurance Offering |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Service Offering |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#product-offering) | Product Offering |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#travel-offer) | Travel Offer |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Offering | makes available | Product or Service (review) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Offering | has | [Price](price.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Order Line](../../request/order/order-line.md) | requests | Offering | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Category](../../../../industry-patterns/e-commerce.md#concepts-applications-typically-add) | classifies | Offering | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Offering | offers | Product or Product Variant (review) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Catalog](catalog.md) | publishes | Offering | M:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Offering | has | [Price](price.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Cart Line](../../request/order/cart-line.md) | selects | Offering | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Order Line](../../request/order/order-line.md) | snapshots | Offering | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Financial Offering | makes available | [Product Version](../product/product-version.md) | M:1 | [financial-services](../../../../industry-patterns/financial-services.md) |
| Insurance Offering | makes available | [Product Version](../product/product-version.md) | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
| Product Offering | offers | [Product Version](../product/product-version.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Subscription](../../agreement/agreement/subscription.md) | instantiates | Product Offering | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Travel Offer | contains | [Offer Item](../../travel/booking/offer-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
