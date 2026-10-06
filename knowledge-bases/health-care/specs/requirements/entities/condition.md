---
type: entity
title: "Condition"
description: "A longitudinal health concern, problem, disease, symptom, or other condition associated with a Patient."
tags: [health-care, industry-pattern, entity]
---

# Condition

## Canonical origin

This selected specification derives from [Condition](../../../../../model/requirements/health-care/clinical-note/condition.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A longitudinal health concern, problem, disease, symptom, or other condition associated with a Patient.

## Attributes

Condition Identifier; Code; Clinical Status; Verification Status; Onset Date; Abatement Date; Severity; Body Site; Recorded Date

## Relationships

Belongs to a Patient; may be asserted by Diagnoses and addressed by Care Plans.

## Operations

- record
- verify
- update-clinical-status
- mark-entered-in-error

## States

provisional; confirmed; active; inactive; resolved; entered-in-error

## Rules

- [clinical-assertion-requires-provenance](../rules/clinical-assertion-requires-provenance.md)

