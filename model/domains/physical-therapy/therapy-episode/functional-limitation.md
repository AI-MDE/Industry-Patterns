---
type: entity
title: "Functional Limitation"
---

# Functional Limitation

Domain: [Physical Therapy](../README.md). ABE: [Therapy Episode](README.md).

## Definition and detail

A limitation in activity or participation relevant to the Patient's daily life and therapy goals.

Logical attributes: Limitation Identifier; Activity Domain; Description; Severity; Baseline Status; Patient Priority; Onset Date; Resolution Date.

Examples include walking, stairs, transfers, lifting, reaching, dressing, work, sport, balance, endurance, and pain-limited participation.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#functional-limitation) | Functional Limitation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](therapy-episode.md) | has | [Functional Limitation](functional-limitation.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
