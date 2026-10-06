---
type: entity
title: "Claim Assessment"
---

# Claim Assessment

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An evidence-based evaluation of coverage, causation, liability, damage, benefit eligibility, or amount.

Logical attributes: Assessment Identifier; Assessment Type; Assessment Status; Assessed Date; Assessor; Finding; Amount; Rationale; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim-assessment) | Claim Assessment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim Exposure](claim-exposure.md) | receives | [Claim Assessment](claim-assessment.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
