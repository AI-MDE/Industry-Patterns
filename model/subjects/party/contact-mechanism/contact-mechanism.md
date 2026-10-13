---
type: entity
title: "Contact Mechanism"
---

# Contact Mechanism

Subject: [Parties and Roles](../README.md). ABE: [Contact Mechanism](README.md).

## Definition and detail

A means by which a Party can be contacted.

Logical attributes: Contact Mechanism Identifier; Mechanism Type; Value; Status; Verified Indicator; Effective From; Effective Through.

Specializations: Postal Address; Email Address; Telephone Number; Web Address; Communication Identifier.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#contact-mechanism) | Contact Mechanism |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](../party/party.md) | uses | Contact Mechanism | M:M through Party Contact | [cross-industry](../../../../industry-patterns/cross-industry.md) |
