---
type: entity
title: "Capacity Evidence"
---

# Capacity Evidence

Domain: [Crane Rental](../README.md). ABE: [Equipment Model](README.md).

## Definition and detail

The governed source and evaluated result supporting equipment suitability for defined conditions.

Logical attributes: Capacity Evidence Identifier; Evidence Type; Manufacturer Reference; Configuration; Radius; Boom Length; Capacity; Deductions; Allowed Load; Unit; Evaluated By; Evaluation Date.

Rule: a generic crane capacity is not a commitment that a particular configuration can perform a Lift. Suitability must be evaluated against verified conditions, configuration, deductions, manufacturer information, and applicable rules.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#capacity-evidence) | Capacity Evidence |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Plan](../lift-plan/lift-plan.md) | supported by | [Capacity Evidence](capacity-evidence.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
