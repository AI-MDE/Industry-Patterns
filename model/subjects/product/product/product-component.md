---
type: entity
title: "Product Component"
---

# Product Component

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Product](README.md).

Also known as: BOM Component (Manufacturing), Product Component (Telecommunications).

## Definition and detail

A recursive whole-part relationship between Products.

Logical attributes: Component Identifier; Quantity; Unit of Measure; Effective From; Effective Through; Sequence.

### In industries

- **BOM Component** (Manufacturing): A Part's effective-dated participation in a Bill of Material. Attributes: BOM Component Identifier; Component Part Revision; Quantity; Unit; Scrap Factor; Issue Method; Sequence; Effective From; Effective Through; Alternate Group.
- **Product Component** (Telecommunications): A required, optional, or conditional element of a Product bundle. Attributes: Component Identifier; Component Type; Referenced Product or Service Specification; Minimum Quantity; Maximum Quantity; Default Indicator; Dependency Rule.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#product-component) | Product Component |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#bom-component) | BOM Component |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#product-component) | Product Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Bill of Material](../../production/bill-of-material/bill-of-material.md) | contains | BOM Component | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| BOM Component | references | [Part Revision](product-version.md) | M:1 | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| [Product Version](product-version.md) | contains | Product Component | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Product Component | maps to | [Service Specification](../../network/service-specification/service-specification.md) | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
