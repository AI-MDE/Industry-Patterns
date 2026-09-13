---
type: business-rule
title: "Encounter End Cannot Precede Start"
description: "An Encounter end time cannot precede its start time."
tags: [health-care, industry-pattern, business-rule]
---

# Encounter End Cannot Precede Start

## Statement

An Encounter end time cannot precede its start time.

## Applies To

Encounter.

## Condition

An end time is recorded or changed.

## Constraint / Result

Reject an invalid interval and record the validation result.

## Exceptions

Clock or source-data corrections must amend the evidence explicitly.
