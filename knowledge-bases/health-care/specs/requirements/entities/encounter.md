---
type: entity
title: "Encounter"
description: "A bounded interaction in which care is assessed, discussed, delivered, or documented."
tags: [health-care, industry-pattern, entity]
---

# Encounter

## Canonical origin

This selected specification derives from [Encounter](../../../../../model/requirements/health-care/encounter/encounter.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A bounded interaction in which care is assessed, discussed, delivered, or documented.

## Attributes

Encounter Identifier; Type; Status; Start; End; Service Setting; Priority; Reason; Disposition

## Relationships

Concerns one Patient; has Provider participants; belongs to an Episode or Case; records clinical evidence.

## Operations

- start
- add-participant
- record-evidence
- complete
- correct

## States

planned; arrived; in-progress; on-hold; completed; cancelled; entered-in-error

## Rules

- [encounter-end-cannot-precede-start](../rules/encounter-end-cannot-precede-start.md)
- [finalized-records-preserve-history](../rules/finalized-records-preserve-history.md)

