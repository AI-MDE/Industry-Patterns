---
type: entity
title: "Product"
---

# Product

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Product](README.md).

Also known as: Product (E-Commerce), Product (Manufacturing), Telecommunications Product (Telecommunications), Travel Product (Travel).

## Definition and detail

Something an organization defines, supplies, sells, leases, licenses, or otherwise provides.

Logical attributes: Product Identifier; Product Name; Product Type; Product Status; Description; Effective From; Effective Through.

### In industries

- **Product** (E-Commerce): The stable definition of a good, digital item, bundle, subscription, or service. Attributes: Product Identifier; Product Name; Product Type; Product Status; Brand; Description; Effective From; Effective Through.
- **Product** (Manufacturing): A governed definition of an item manufactured, sold, installed, consumed, or serviced. Attributes: Product Identifier; Product Name; Product Type; Product Status; Product Family; Make/Buy Policy; Lifecycle Phase.
- **Telecommunications Product** (Telecommunications): A governed commercial definition of connectivity, voice, messaging, data, media, managed network, device, or related service. Attributes: Product Identifier; Product Name; Product Type; Product Status; Market; Customer Segment; Effective From; Effective Through.
- **Travel Product** (Travel): A reusable definition of a transport, lodging, vehicle, cruise, activity, package, or related travel product. Attributes: Product Identifier; Product Name; Product Type; Product Status; Supplier; Description; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#product) | Product |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#product) | Product |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#product) | Product |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#telecommunications-product) | Telecommunications Product |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#travel-product) | Travel Product |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Product | contains | Product | M:M through Product Component | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Product | has | [Product Variant](product-variant.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Product | has | [Product Version](product-version.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Telecommunications Product | has | [Product Version](product-version.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
