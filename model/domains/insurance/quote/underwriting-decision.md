---
type: entity
title: "Underwriting Decision"
---

# Underwriting Decision

Domain: [Insurance](../README.md). ABE: [Quote](README.md).

## Definition and detail

An explainable decision to accept, decline, refer, postpone, cancel, non-renew, or offer modified terms.

Logical attributes: Decision Identifier; Decision Type; Decision Status; Decision Date; Decided By; Reason Code; Rationale; Authority Reference; Expiration Date.

Rule: preserve the facts, rules, authority, and rationale supporting an underwriting decision.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#underwriting-decision) | Underwriting Decision |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Underwriting Case](underwriting-case.md) | produces | [Underwriting Decision](underwriting-decision.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
