---
type: entity
title: "Medical Case"
---

# Medical Case

Domain: [Health Care](../README.md). ABE: [Encounter](README.md).

## Definition and detail

A managed body of work concerning a Patient's condition, event, investigation, authorization, or service need.

Logical attributes: Case Identifier; Case Type; Case Status; Opened Date; Closed Date; Priority; Case Reason; Outcome.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#medical-case) | Medical Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Medical Case](medical-case.md) | concerns | [Patient](../patient/patient.md) | M:1 | [health-care](../../../../patterns/health-care.md) |
