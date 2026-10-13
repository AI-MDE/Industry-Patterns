---
type: entity
title: "Financial Institution"
---

# Financial Institution

Subject: [Financial Accounts](../README.md). ABE: [Financial Institution](README.md).

Specializes: [Organization](../../party/party/organization.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A legal Party authorized to provide one or more financial services.

Logical attributes: Institution Identifier; Legal Name; Institution Type; Regulatory Status; Jurisdiction; License Reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#financial-institution) | Financial Institution |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Financial Institution | defines | [Financial Product](../../product/product/financial-product.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
