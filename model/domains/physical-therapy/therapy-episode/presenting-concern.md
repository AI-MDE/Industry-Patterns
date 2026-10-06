---
type: entity
title: "Presenting Concern"
---

# Presenting Concern

Domain: [Physical Therapy](../README.md). ABE: [Therapy Episode](README.md).

## Definition and detail

The Patient's reported reason for seeking therapy and its effect on function and participation.

Logical attributes: Concern Identifier; Concern Type; Description; Onset Date; Mechanism; Irritability; Severity; Patient Priority; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#presenting-concern) | Presenting Concern |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](therapy-episode.md) | concerns | [Presenting Concern](presenting-concern.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
