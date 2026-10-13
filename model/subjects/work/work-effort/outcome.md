---
type: entity
title: "Outcome"
---

# Outcome

Subject: [Work and Projects](../README.md). ABE: [Work Effort](README.md).

Also known as: Service Outcome and Finding (Equipment Service).

## Definition and detail

A meaningful result produced or recognized by business activity.

Logical attributes: Outcome Identifier; Outcome Type; Outcome Status; Achieved At; Description; Evidence Reference.

### In industries

- **Service Outcome and Finding** (Equipment Service): Structured result of the work: work performed, findings and defects, inspection pass/fail, follow-up recommended, customer sign-off. Free-text completion notes alone are the Simple variant.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#outcome) | Outcome |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#service-outcome-and-finding-standard) | Service Outcome and Finding (Standard) |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Effort](work-effort.md) | produces | Outcome | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
