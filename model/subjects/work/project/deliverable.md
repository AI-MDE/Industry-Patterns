---
type: entity
title: "Deliverable"
---

# Deliverable

Subject: [Work and Projects](../README.md). ABE: [Project](README.md).

## Definition and detail

Work product delivered to the Client.

Logical attributes: Deliverable Identifier; Deliverable Name; Deliverable Type; Deliverable Status; Due Date; Delivery Date; Acceptance Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Deliverable |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | produces | Deliverable | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
