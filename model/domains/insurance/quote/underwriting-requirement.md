---
type: entity
title: "Underwriting Requirement"
---

# Underwriting Requirement

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

Information, inspection, evidence, approval, or action required before a decision.

Logical attributes: Requirement Identifier; Requirement Type; Requirement Status; Requested Date; Due Date; Received Date; Source; Waiver Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#underwriting-requirement) | Underwriting Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Underwriting Case](underwriting-case.md) | contains | [Underwriting Requirement](underwriting-requirement.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
