---
type: entity
title: "Archive Package"
---

# Archive Package

Domain: [Legacy Conversion](../README.md). ABE: [Cutover Event](README.md).

## Definition and detail

A preserved collection of legacy records, metadata, schemas, documentation, and access instructions.

Logical attributes: Archive Identifier; Archive Type; Created At; Content Scope; Format; Encryption Reference; Hash; Retention End; Access Policy.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#archive-package) | Archive Package |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Decommission Plan](decommission-plan.md) | preserves | [Archive Package](archive-package.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
