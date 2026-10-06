---
type: entity
title: "Observation"
description: "A measured, asserted, or observed fact about a Patient or specimen."
tags: [health-care, industry-pattern, entity]
---

# Observation

## Canonical origin

This selected specification derives from [Observation](../../../../../model/requirements/health-care/clinical-note/observation.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A measured, asserted, or observed fact about a Patient or specimen.

## Attributes

Observation Identifier; Code; Status; Observed At; Value; Unit; Interpretation; Method; Reference Range; Performer; Source

## Relationships

Concerns a Patient; is recorded in an Encounter or produced by Service Delivery.

## Operations

- record
- validate
- finalize
- correct
- supersede

## States

registered; preliminary; final; amended; corrected; cancelled; entered-in-error

## Rules

- [observation-requires-subject-time-source](../rules/observation-requires-subject-time-source.md)
- [finalized-records-preserve-history](../rules/finalized-records-preserve-history.md)

