---
type: entity
title: "Synchronization Contract"
---

# Synchronization Contract

Domain: [Legacy Conversion](../README.md). ABE: [System of Record Assignment](README.md).

## Definition and detail

A versioned agreement governing data exchanged between Systems.

Logical attributes: Contract Identifier; Contract Version; Publisher; Consumer; Data Scope; Direction; Trigger; Delivery Guarantee; Ordering Rule; Idempotency Rule; Error Policy; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#synchronization-contract) | Synchronization Contract |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Synchronization Contract](synchronization-contract.md) | connects | Publisher System and Consumer System (review) | M:1 each | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
