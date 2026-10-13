---
type: entity
title: "Price"
---

# Price

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Offering](README.md).

Also known as: Billing Rate (Professional Services), Fare or Rate (Travel).

## Definition and detail

A monetary charge applicable to an Offering under stated conditions.

Logical attributes: Price Identifier; Price Type; Amount; Currency; Unit of Measure; Effective From; Effective Through.

### In industries

- **Billing Rate** (Professional Services): Rate used to bill professional work. Attributes: Billing Rate Identifier; Rate Name; Rate Type; Billing Rate Amount; Currency; Effective Date; Expiration Date.
- **Fare or Rate** (Travel): A governed price basis and commercial condition for a Travel Service. Attributes: Fare or Rate Identifier; Code; Type; Amount; Currency; Cabin or Room Class; Occupancy; Effective From; Effective Through; Rule Reference.

## E-Commerce context

A monetary amount applicable to an Offering under stated conditions.

Logical attributes: Price Identifier; Price Type; Amount; Currency; Unit of Measure; Minimum Quantity; Customer Segment; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#price) | Price |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#price) | Price |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Billing Rate |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#fare-or-rate) | Fare or Rate |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Offering](offering.md) | has | Price | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Offering](offering.md) | has | Price | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Billing Rate | prices | Project Assignment or Invoice Line (review) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Fare or Rate | prices | [Offer Item](../../travel/booking/offer-item.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
