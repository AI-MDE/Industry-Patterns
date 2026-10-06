---
type: entity
title: "Service Agreement"
---

# Service Agreement

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Agreement](../../agreement/agreement/agreement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Contractual terms governing the professional service.

Logical attributes: Service Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Payment Terms; Billing Frequency; Retainer Amount; Fixed Fee Amount.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Service Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Agreement](service-agreement.md) | governs | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
