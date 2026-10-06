---
type: primary-entity
title: "Lift Plan"
---

# Lift Plan

Domain: [Crane Rental](../README.md). ABE: [Lift Plan](README.md).

## Definition and detail

A versioned plan defining the Lift, equipment, configuration, load, path, roles, hazards, controls, communications, and execution conditions.

Logical attributes: Lift Plan Identifier; Plan Number; Version; Plan Status; Job Order; Lift Classification; Prepared By; Reviewed By; Approved By; Effective Date; Execution Window.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#lift-plan) | Lift Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | has | [Lift Plan](lift-plan.md) | 1:M versions | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Plan](lift-plan.md) | references | [Load Requirement](../lift-request/load-requirement.md) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Plan](lift-plan.md) | specifies | [Crane Configuration](../equipment-model/crane-configuration.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Lift Plan](lift-plan.md) | supported by | [Capacity Evidence](../equipment-model/capacity-evidence.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
