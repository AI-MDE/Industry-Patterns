---
type: entity
title: "Discharge Summary"
---

# Discharge Summary

Domain: [Physical Therapy](../README.md). ABE: [Progress Evaluation](README.md).

## Definition and detail

A finalized clinical document summarizing the Episode, services, outcomes, remaining limitations, home plan, precautions, and follow-up.

Logical attributes: Summary Identifier; Document Status; Authored At; Author; Signed At; Episode; Plan Version; Final Outcome Results; Recipient List.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#discharge-summary) | Discharge Summary |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Discharge](discharge.md) | produces | [Discharge Summary](discharge-summary.md) | 1:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
