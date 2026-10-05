---
type: entity
title: "Deliverable"
---

# Deliverable

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Work product delivered to the Client.

Logical attributes: Deliverable Identifier; Deliverable Name; Deliverable Type; Deliverable Status; Due Date; Delivery Date; Acceptance Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Deliverable |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | produces | [Deliverable](deliverable.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
