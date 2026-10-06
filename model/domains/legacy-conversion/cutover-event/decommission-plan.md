---
type: entity
title: "Decommission Plan"
---

# Decommission Plan

Domain: [Legacy Conversion](../README.md). ABE: [Cutover Event](README.md).

## Definition and detail

A governed plan for removing a legacy System from operational use.

Logical attributes: Decommission Plan Identifier; Plan Status; Preconditions; Dependency Summary; Archive Requirement; Access Requirement; Planned Date; Actual Date; Approval.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#decommission-plan) | Decommission Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Decommission Plan](decommission-plan.md) | preserves | [Archive Package](archive-package.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
