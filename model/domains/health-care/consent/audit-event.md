---
type: entity
title: "Audit Event"
---

# Audit Event

Domain: [Health Care](../README.md). ABE: [Consent](README.md).

## Definition and detail

Evidence of access to or action upon protected health information or system functionality.

Logical attributes: Audit Event Identifier; Event Type; Occurred At; Actor; Action; Subject; Purpose; Outcome; Source; Correlation Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#audit-event) | Audit Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Audit Event](audit-event.md) | records access or action upon | Patient information (review) | M:1 | [health-care](../../../../patterns/health-care.md) |
