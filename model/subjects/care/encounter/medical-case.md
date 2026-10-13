---
type: entity
title: "Medical Case"
---

# Medical Case

Subject: [Health Care](../README.md). ABE: [Encounter](README.md).

Specializes: [Case](../../case/case/case.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A managed body of work concerning a Patient's condition, event, investigation, authorization, or service need.

Logical attributes: Case Identifier; Case Type; Case Status; Opened Date; Closed Date; Priority; Case Reason; Outcome.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#medical-case) | Medical Case |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Medical Case | concerns | [Patient](../patient/patient.md) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Concerns one Patient; is supported by a Care Team; groups Requests, Decisions, and evidence.

## Operations

- open
- assign
- add-evidence
- resolve
- close
- reopen

## States

open; assigned; investigating; decision-required; resolved; closed

## Rules

- [case-resolution-requires-evidence](../rules/case-resolution-requires-evidence.md)
