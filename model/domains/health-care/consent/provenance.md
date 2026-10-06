---
type: entity
title: "Provenance"
---

# Provenance

Domain: [Health Care](../README.md). ABE: [Consent](README.md).

## Definition and detail

Evidence of who created, asserted, transformed, imported, or attested to a record.

Logical attributes: Provenance Identifier; Recorded At; Activity Type; Agent; Source System; Source Record Identifier; Signature reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#provenance) | Provenance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Provenance](provenance.md) | describes | Clinical or administrative record (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
