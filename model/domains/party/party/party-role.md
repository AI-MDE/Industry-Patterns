---
type: entity
title: "Party Role"
---

# Party Role

Domain: [Party](../README.md). ABE: [Party](README.md).

## Definition and detail

The capacity in which a Party participates in a context, such as Customer, Supplier, Employee, Provider, Insurer, Patient, Professional, or Account Holder.

Logical attributes: Party Role Identifier; Role Type; Role Status; Effective From; Effective Through.

Rule: a Party is not permanently equated with one role. The same Party may perform several roles concurrently or over time.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#party-role) | Party Role |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](party.md) | performs | [Party Role](party-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party Role](party-role.md) | relates to | [Party Role](party-role.md) | M:M through Party Relationship | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party Role](party-role.md) | receives | [Assignment](../../work-management/work-effort/assignment.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
