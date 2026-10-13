---
type: entity
title: "Audit Event"
---

# Audit Event

Subject: [Information Governance](../README.md). ABE: [Consent](README.md).

## Definition and detail

Evidence of access to or action upon protected health information or system functionality.

Logical attributes: Audit Event Identifier; Event Type; Occurred At; Actor; Action; Subject; Purpose; Outcome; Source; Correlation Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#audit-event) | Audit Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Audit Event | records access or action upon | Patient information (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

References the Patient, actor, operation, record, and policy context.

## Operations

- record
- query-authorized-audit

## States

recorded

## Rules

- [protected-access-must-be-audited](../../care/rules/protected-access-must-be-audited.md)
- [audit-events-are-immutable](../../care/rules/audit-events-are-immutable.md)
