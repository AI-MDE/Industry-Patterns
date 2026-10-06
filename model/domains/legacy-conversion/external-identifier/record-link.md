---
type: entity
title: "Record Link"
---

# Record Link

Domain: [Legacy Conversion](../README.md). ABE: [External Identifier](README.md).

## Definition and detail

An asserted relationship between a Source Record and a canonical or Target Record.

Logical attributes: Record Link Identifier; Link Type; Link Status; Confidence; Effective From; Effective Through; Decision reference.

Link types include exact match, probable match, created from, supersedes, duplicate of, split from, or merged into.

## Source terminology

| Source | Term |
|---|---|
| [patterns/legacy-conversion.md](../../../../patterns/legacy-conversion.md#record-link) | Record Link |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Source Record](../system/source-record.md) | corresponds through | [Record Link](record-link.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
| Target Record or Golden Record (review) | corresponds through | [Record Link](record-link.md) | 1:M | [legacy-conversion](../../../../patterns/legacy-conversion.md) |
