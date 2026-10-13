---
type: entity
title: "Nonconformance"
---

# Nonconformance

Subject: [Quality and Inspection](../README.md). ABE: [Quality Plan](README.md).

## Definition and detail

Evidence that material, output, process, or equipment failed a requirement.

Logical attributes: Nonconformance Identifier; Type; Status; Detected At; Source; Requirement; Severity; Quantity; Containment; Disposition.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#nonconformance) | Nonconformance |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Nonconformance | concerns | Material, Output, Process, or Asset (review) | M:1 | [manufacturing](../../../../industry-patterns/manufacturing.md) |
