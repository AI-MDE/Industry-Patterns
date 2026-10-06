---
type: entity
title: "Assignment"
---

# Assignment

Domain: [Work Management](../README.md). ABE: [Work Effort](README.md).

## Definition and detail

The allocation of a Party Role or resource to a Work Effort with a stated responsibility.

Logical attributes: Assignment Identifier; Assignment Role; Assignment Status; Allocation; Assigned From; Assigned Through.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#assignment) | Assignment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party Role](../../party/party/party-role.md) | receives | [Assignment](assignment.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Assignment](assignment.md) | allocates to | [Work Effort](work-effort.md) | M:1 | [cross-industry](../../../../patterns/cross-industry.md) |
