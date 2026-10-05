---
type: entity
title: "Migration Wave"
---

# Migration Wave

Domain: [Legacy Conversion](../README.md). ABE: [Migration Plan](README.md).

## Definition and detail

A business-meaningful portion of migration scope released together.

Logical attributes: Wave Identifier; Wave Name; Wave Status; Sequence; Planned Start; Planned Cutover; Actual Cutover; Scope Criteria.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#migration-wave) | Migration Wave |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Migration Plan](migration-plan.md) | contains | [Migration Wave](migration-wave.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| [Migration Wave](migration-wave.md) | executes through | [Migration Batch](migration-batch.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
