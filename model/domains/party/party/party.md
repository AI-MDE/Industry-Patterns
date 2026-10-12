---
type: primary-entity
title: "Party"
---

# Party

Domain: [Party](../README.md). ABE: [Party](README.md).

## Definition and detail

A person, organization, or other legally or operationally recognized participant.

Logical attributes: Party Identifier; Party Type; Display Name; Legal Name; Party Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#party) | Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](party.md) | specializes as | Person or Organization (review) | 1:0..1 each | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party](party.md) | performs | [Party Role](party-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party](party.md) | uses | [Contact Mechanism](../contact-mechanism/contact-mechanism.md) | M:M through Party Contact | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party](party.md) | participates through | [Agreement Role](../../agreement/agreement/agreement-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party](party.md) | has | [Customer Profile](../../financial-services/customer-profile/customer-profile.md) | 1:M by institution | [financial-services](../../../../patterns/financial-services.md) |
| [Party](party.md) | grants | [Mandate](../../financial-services/financial-agreement/mandate.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
