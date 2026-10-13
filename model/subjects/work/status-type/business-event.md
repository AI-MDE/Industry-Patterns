---
type: entity
title: "Business Event"
---

# Business Event

Subject: [Work and Projects](../README.md). ABE: [Status Type](README.md).

## Definition and detail

A fact of business significance that occurs at a point in time and may trigger evaluation or action.

Logical attributes: Event Identifier; Event Type; Occurred At; Recorded At; Source; Correlation Reference; Description.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#business-event) | Business Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Business Event | may trigger | [Work Effort](../work-effort/work-effort.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
