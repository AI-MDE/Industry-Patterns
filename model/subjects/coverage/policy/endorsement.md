---
type: entity
title: "Endorsement"
---

# Endorsement

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Policy](README.md).

## Definition and detail

A Policy Transaction or contractual form that adds, removes, or modifies Policy terms.

Logical attributes: Endorsement Identifier; Endorsement Type; Status; Requested Date; Effective Date; Description; Premium Change; Form Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#endorsement) | Endorsement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Policy Transaction](policy-transaction.md) | may create | Endorsement | 1:0..M | [insurance](../../../../industry-patterns/insurance.md) |
