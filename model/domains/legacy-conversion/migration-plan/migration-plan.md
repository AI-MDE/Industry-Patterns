---
type: primary-entity
title: "Migration Plan"
---

# Migration Plan

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

A governed plan defining scope, sequence, controls, acceptance criteria, cutover, recovery, and responsibilities.

Logical attributes: Migration Plan Identifier; Plan Name; Plan Version; Plan Status; Scope; Source Baseline; Target Version; Acceptance Criteria; Cutover Strategy; Rollback Strategy.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#migration-plan) | Migration Plan |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Migration Plan](migration-plan.md) | contains | [Migration Wave](migration-wave.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
