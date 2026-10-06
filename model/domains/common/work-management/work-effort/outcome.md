---
type: entity
title: "Outcome"
---

# Outcome

Domain: [Work Management](../README.md). ABE: [Work Effort](README.md).

## Definition and detail

A meaningful result produced or recognized by business activity.

Logical attributes: Outcome Identifier; Outcome Type; Outcome Status; Achieved At; Description; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#outcome) | Outcome |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Effort](work-effort.md) | produces | [Outcome](outcome.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
