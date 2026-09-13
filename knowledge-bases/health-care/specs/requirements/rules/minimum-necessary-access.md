---
type: business-rule
title: "Minimum Necessary Access"
description: "An actor may access only the Patient information necessary for an authorized purpose."
tags: [health-care, industry-pattern, business-rule]
---

# Minimum Necessary Access

## Statement

An actor may access only the Patient information necessary for an authorized purpose.

## Applies To

Every read, export, disclosure, and privileged search.

## Condition

Actor, role, care relationship, purpose, consent, restriction, and time are evaluated.

## Constraint / Result

Allow the minimum scope or deny with an auditable reason.

## Exceptions

Jurisdiction-defined emergency access must be explicitly invoked and audited.
