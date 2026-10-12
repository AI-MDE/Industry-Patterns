---
type: entity
title: "Constraint"
---

# Constraint

Domain: [Scheduling](../README.md). ABE: [Demand](README.md).

## Definition and detail

A condition that a feasible schedule must satisfy or should prefer.

Constraints commonly include:

- **Time:** availability, duration, time windows, recurrence, simultaneous availability;
- **Capability / Requirement:** skill, qualification, certification, attributes;
- **Location:** required site, territory, proximity, travel time;
- **Capacity:** people, workload, room capacity, throughput;
- **Resource Combination:** required team, room, vehicle, tools, or equipment;
- **Business Policy:** workload limits, continuity rules, authorization, service-level commitments.

Constraints may be hard or soft.

A hard constraint must be satisfied for an Assignment to be valid. A soft constraint contributes to preference, ranking, or optimization.

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#constraint) | Constraint |
