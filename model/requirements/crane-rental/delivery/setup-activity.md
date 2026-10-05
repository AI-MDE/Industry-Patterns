---
type: entity
title: "Setup Activity"
---

# Setup Activity

Domain: [Crane Rental](../README.md). ABE: [Delivery](README.md).

## Definition and detail

Assembly, positioning, configuration, stabilization, calibration, or commissioning work preparing Equipment for operation.

Logical attributes: Setup Identifier; Setup Type; Setup Status; Start Time; End Time; Asset; Configuration; Location Zone; Responsible Person; Completion Evidence.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#setup-activity) | Setup Activity |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | has | [Setup Activity](setup-activity.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
