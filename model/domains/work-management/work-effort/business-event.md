---
type: entity
title: "Business Event"
---

# Business Event

Domain: [Work Management](../README.md). ABE: [Work Effort](README.md).

## Definition and detail

A fact of business significance that occurs at a point in time and may trigger evaluation or action.

Logical attributes: Event Identifier; Event Type; Occurred At; Recorded At; Source; Correlation Reference; Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#business-event) | Business Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Business Event](business-event.md) | may trigger | [Work Effort](work-effort.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
