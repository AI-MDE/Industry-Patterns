---
type: primary-entity
title: "Financial Institution"
---

# Financial Institution

Domain: [Financial Services](../README.md). ABE: [Financial Institution](README.md).

Specializes: [Organization](../../party/party/organization.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A legal Party authorized to provide one or more financial services.

Logical attributes: Institution Identifier; Legal Name; Institution Type; Regulatory Status; Jurisdiction; License Reference; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#financial-institution) | Financial Institution |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Financial Institution](financial-institution.md) | defines | [Financial Product](financial-product.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
