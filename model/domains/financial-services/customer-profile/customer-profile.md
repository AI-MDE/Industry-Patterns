---
type: primary-entity
title: "Customer Profile"
---

# Customer Profile

Domain: [Financial Services](../README.md). ABE: [Customer Profile](README.md).

## Definition and detail

The institution's governed view of a Party as a Customer.

Logical attributes: Customer Identifier; Customer Type; Customer Status; Risk Rating; Service Segment; Onboarded Date; Review Due Date; Responsible Unit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#customer-profile) | Customer Profile |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](../../party/party/party.md) | has | [Customer Profile](customer-profile.md) | 1:M by institution | [financial-services](../../../../patterns/financial-services.md) |
