---
type: entity
title: "Analytic Fact"
---

# Analytic Fact

Domain: [Measurement](../README.md). ABE: [Measure](README.md).

## Definition and detail

A measurable business occurrence at an explicitly declared grain.

Logical attributes: Fact Identifier; Fact Type; Occurred Date; Quantity; Amount; Duration; Source Record reference.

Rule: operational concepts remain authoritative; analytic facts and dimensions are derived projections with declared lineage.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#analytic-fact) | Analytic Fact |

## Integrity rules

- Derived analytic facts must retain lineage to authoritative operational records.
