---
type: entity
title: "Underwriting Case"
---

# Underwriting Case

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Underwriting Case](README.md).

Specializes: [Case](../../case/case/case.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A managed evaluation of an Application, Quote, Policy change, or renewal risk.

Logical attributes: Underwriting Case Identifier; Case Type; Case Status; Opened Date; Priority; Assigned Underwriter; Decision Due Date; Product Version.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#underwriting-case) | Underwriting Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Underwriting Case | evaluates | Application, Quote, or Policy Transaction (review) | M:1 | [insurance](../../../../industry-patterns/insurance.md) |
| Underwriting Case | contains | [Underwriting Requirement](underwriting-requirement.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Underwriting Case | produces | [Underwriting Decision](../../case/decision/decision.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
