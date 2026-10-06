---
type: entity
title: "Underwriting Case"
---

# Underwriting Case

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

A managed evaluation of an Application, Quote, Policy change, or renewal risk.

Logical attributes: Underwriting Case Identifier; Case Type; Case Status; Opened Date; Priority; Assigned Underwriter; Decision Due Date; Product Version.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#underwriting-case) | Underwriting Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Underwriting Case](underwriting-case.md) | evaluates | Application, Quote, or Policy Transaction (review) | M:1 | [insurance](../../../../patterns/insurance.md) |
| [Underwriting Case](underwriting-case.md) | contains | [Underwriting Requirement](underwriting-requirement.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
| [Underwriting Case](underwriting-case.md) | produces | [Underwriting Decision](underwriting-decision.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
