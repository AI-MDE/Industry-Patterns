---
type: entity
title: "Engagement"
---

# Engagement

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Commercial relationship under which professional work is delivered.

Logical attributes: Engagement Identifier; Engagement Name; Engagement Type; Engagement Status; Engagement Start Date; Engagement End Date; Billing Arrangement; Contract Reference; Approved Budget Amount.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Engagement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Client](client.md) | sponsors | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Service Agreement](service-agreement.md) | governs | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | manages | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Engagement](engagement.md) | authorizes | [Project](project.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
