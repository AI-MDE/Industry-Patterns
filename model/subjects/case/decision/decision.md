---
type: entity
title: "Decision"
---

# Decision

Subject: [Cases and Decisions](../README.md). ABE: [Decision](README.md).

Also known as: Readiness Review (Crane Rental), Release for Service (Crane Rental), Underwriting Decision (Insurance).

## Definition and detail

A controlled decision that defined prerequisites are satisfied for dispatch, setup, or Lift execution.

Logical attributes: Review Identifier; Review Type; Review Status; Performed At; Reviewer; Job Order; Findings; Outstanding Items; Decision; Rationale.

### In industries

- **Release for Service** (Crane Rental): An authorized decision that Equipment and required conditions are acceptable for a defined operational scope and time. Attributes: Release Identifier; Release Status; Released At; Released By; Asset; Configuration; Job Order; Scope; Conditions; Expiration.
- **Underwriting Decision** (Insurance): An explainable decision to accept, decline, refer, postpone, cancel, non-renew, or offer modified terms. Attributes: Decision Identifier; Decision Type; Decision Status; Decision Date; Decided By; Reason Code; Rationale; Authority Reference; Expiration Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#readiness-review) | Readiness Review |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#release-for-service) | Release for Service |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#underwriting-decision) | Underwriting Decision |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Release for Service | applies to | Asset and Configuration (review) | M:1 each | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Underwriting Case](../../coverage/underwriting-case/underwriting-case.md) | produces | Underwriting Decision | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
