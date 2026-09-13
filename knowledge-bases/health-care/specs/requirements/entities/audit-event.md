---
type: entity
title: "Audit Event"
description: "Immutable evidence of access to or action upon protected health information or system functionality."
tags: [health-care, industry-pattern, entity]
---

# Audit Event

## Purpose

Immutable evidence of access to or action upon protected health information or system functionality.

## Attributes

Audit Event Identifier; Event Type; Occurred At; Actor; Action; Subject; Purpose; Outcome; Source; Correlation Reference

## Relationships

References the Patient, actor, operation, record, and policy context.

## Operations

- record
- query-authorized-audit

## States

recorded

## Rules

- [protected-access-must-be-audited](../rules/protected-access-must-be-audited.md)
- [audit-events-are-immutable](../rules/audit-events-are-immutable.md)
