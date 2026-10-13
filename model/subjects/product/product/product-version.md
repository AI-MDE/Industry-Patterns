---
type: entity
title: "Product Version"
---

# Product Version

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Product](README.md).

Also known as: Product Version (Insurance), Product Version (Manufacturing), Part Revision (Manufacturing), Product Version (Telecommunications).

## Definition and detail

A versioned set of eligibility, terms, rates, fees, limits, disclosures, accounting rules, and servicing behavior.

Logical attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.

### In industries

- **Product Version** (Insurance): A versioned set of product terms, available Coverages, rules, forms, rating behavior, and underwriting requirements. Attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.
- **Product Version** (Manufacturing): An effective version or revision of a Product definition. Attributes: Product Version Identifier; Revision; Status; Effective From; Effective Through; Release Date; Superseded By.
- **Part Revision** (Manufacturing): A controlled version of a Part's definition and specifications. Attributes: Part Revision Identifier; Revision; Status; Effective From; Effective Through; Change Reference.
- **Product Version** (Telecommunications): A versioned definition of product components, eligibility, commercial terms, dependencies, and lifecycle actions. Attributes: Product Version Identifier; Version; Status; Effective From; Effective Through; Approval Reference; Superseded By.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#product-version) | Product Version |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#product-version) | Product Version |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#product-version) | Product Version |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#part-revision) | Part Revision |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#product-version) | Product Version |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Product](financial-product.md) | has | Product Version | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Financial Offering](../offering/offering.md) | makes available | Product Version | M:1 | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Insurance Product](../../coverage/insurance-product/insurance-product.md) | has | Product Version | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Product Version | contains | [Coverage Definition](../../coverage/insurance-product/coverage-definition.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Insurance Offering](../offering/offering.md) | makes available | Product Version | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
| [Product](product.md) | has | Product Version | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Product Version | has | [Product Specification](../../production/bill-of-material/product-specification.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| Product Version | governed by | Bill of Material and Routing (review) | 1:M versions | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| [BOM Component](product-component.md) | references | Part Revision | M:1 | [manufacturing](../../../../industry-patterns/manufacturing.md) |
| [Telecommunications Product](product.md) | has | Product Version | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Product Version | contains | [Product Component](product-component.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| [Product Offering](../offering/offering.md) | offers | Product Version | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
