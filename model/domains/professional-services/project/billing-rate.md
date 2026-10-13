---
type: entity
title: "Billing Rate"
---

# Billing Rate

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Rate used to bill professional work.

Logical attributes: Billing Rate Identifier; Rate Name; Rate Type; Billing Rate Amount; Currency; Effective Date; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Billing Rate |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Billing Rate](billing-rate.md) | prices | Project Assignment or Invoice Line (review) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
