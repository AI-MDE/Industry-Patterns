---
type: entity
title: "Engagement"
---

# Engagement

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

Specializes: [Agreement](agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Commercial relationship under which professional work is delivered.

Logical attributes: Engagement Identifier; Engagement Name; Engagement Type; Engagement Status; Engagement Start Date; Engagement End Date; Billing Arrangement; Contract Reference; Approved Budget Amount.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Engagement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Client](../../party/party/customer.md) | sponsors | Engagement | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Service Agreement](agreement.md) | governs | Engagement | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Professional](../../workforce/worker/worker.md) | manages | Engagement | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Engagement | authorizes | [Project](../../work/project/project.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
