---
type: entity
title: "Resource Requirement"
---

# Resource Requirement

Domain: [Manufacturing](../README.md). ABE: [Routing](README.md).

Specializes: [Requirement](../../scheduling/demand/requirement.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A required capability, labor role, machine, tool, material, instruction, or condition for an Operation.

Logical attributes: Requirement Identifier; Resource Type; Required Capability; Quantity; Duration; Qualification; Alternate Group.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#resource-requirement) | Resource Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Operation Definition](operation-definition.md) | has | [Resource Requirement](resource-requirement.md) | 1:M | [manufacturing](../../../../patterns/manufacturing.md) |
