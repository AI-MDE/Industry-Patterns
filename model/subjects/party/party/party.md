---
type: entity
title: "Party"
---

# Party

Subject: [Parties and Roles](../README.md). ABE: [Party](README.md).

## Definition and detail

A person, organization, or other legally or operationally recognized participant.

Logical attributes: Party Identifier; Party Type; Display Name; Legal Name; Party Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#party) | Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Party | specializes as | Person or Organization (review) | 1:0..1 each | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party | performs | [Party Role](party-role.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party | uses | [Contact Mechanism](../contact-mechanism/contact-mechanism.md) | M:M through Party Contact | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party | participates through | [Agreement Role](../../agreement/agreement/agreement-role.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party | has | [Customer Profile](../customer-account/customer-account.md) | 1:M by institution | [financial-services](../../../../industry-patterns/financial-services.md) |
| Party | grants | [Mandate](../../case/decision/authorization.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
